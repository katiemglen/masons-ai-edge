"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";
import { motion, AnimatePresence } from "framer-motion";

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

const ACCEPTED_TYPES: Record<string, string[]> = {
  "audio/*": [".wav", ".mp3", ".flac", ".ogg", ".aac"],
  "image/*": [".png", ".jpg", ".jpeg", ".gif", ".webp"],
  "video/*": [".mp4", ".webm", ".mov"],
  "application/pdf": [".pdf"],
  "text/plain": [".txt"],
  "application/zip": [".zip"],
  "application/x-vital": [".vital"],
};

interface FileUploadProps {
  userId: Id<"users">;
  moduleId: string;
}

export default function FileUpload({ userId, moduleId }: FileUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const generateUploadUrl = useMutation(api.uploads.generateUploadUrl);
  const saveFile = useMutation(api.uploads.saveFile);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      for (const file of acceptedFiles) {
        if (file.size > MAX_FILE_SIZE) {
          setError(`${file.name} is too large. Max size: 50MB.`);
          continue;
        }

        setUploading(true);
        setUploadProgress(0);
        setError("");
        setSuccess(false);

        try {
          // Get upload URL from Convex
          const uploadUrl = await generateUploadUrl();

          // Upload the file
          const result = await fetch(uploadUrl, {
            method: "POST",
            headers: { "Content-Type": file.type || "application/octet-stream" },
            body: file,
          });

          if (!result.ok) throw new Error("Upload failed");

          const { storageId } = await result.json();

          // Save file metadata
          await saveFile({
            userId,
            moduleId,
            fileName: file.name,
            fileType: file.type || "application/octet-stream",
            fileSize: file.size,
            storageId,
          });

          setUploadProgress(100);
          setSuccess(true);
          setTimeout(() => setSuccess(false), 3000);
        } catch (err: any) {
          setError(err.message || "Upload failed. Please try again.");
        } finally {
          setUploading(false);
        }
      }
    },
    [generateUploadUrl, saveFile, userId, moduleId]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ACCEPTED_TYPES,
    maxSize: MAX_FILE_SIZE,
    multiple: true,
  });

  return (
    <div>
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-200 ${
          isDragActive
            ? "border-purple-500 bg-purple-500/10"
            : "border-gray-700 hover:border-purple-500/50 hover:bg-gray-900/50"
        }`}
      >
        <input {...getInputProps()} />
        <div className="space-y-3">
          <p className="text-3xl">
            {uploading ? "⏳" : isDragActive ? "📥" : "📁"}
          </p>
          {uploading ? (
            <div>
              <p className="text-gray-300">Uploading...</p>
              <div className="w-48 h-2 bg-gray-800 rounded-full mx-auto mt-2 overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${uploadProgress}%` }}
                  className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                />
              </div>
            </div>
          ) : isDragActive ? (
            <p className="text-purple-300">Drop files here...</p>
          ) : (
            <>
              <p className="text-gray-300">
                Drag & drop files here, or click to select
              </p>
              <p className="text-gray-500 text-sm">
                Audio (.wav, .mp3, .flac) • Images (.png, .jpg) • Video (.mp4) •
                Documents (.pdf, .txt) • Archives (.zip) • Max 50MB
              </p>
            </>
          )}
        </div>
      </div>

      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-3 bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-center"
          >
            <p className="text-green-400 text-sm">✅ File uploaded successfully!</p>
          </motion.div>
        )}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-3 bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-center"
          >
            <p className="text-red-400 text-sm">❌ {error}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
