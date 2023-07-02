import React, { useState } from "react";
import { toast } from "react-hot-toast";

type DropzoneProps = {
    onDrop: (selectedFiles: FileList | null) => void;
    accept: string;
};

const Dropzone: React.FC<DropzoneProps> = ({ onDrop, accept }) => {
    const [highlight, setHighlight] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const fileInputRef = React.createRef<HTMLInputElement>();

    const maxFileSize = 15 * 1024 * 1024; // 15MB in bytes
    const maxTotalFiles = 10;

    const openFileDialog = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const onFilesAdded = (evt: React.ChangeEvent<HTMLInputElement>) => {
        if (evt.target.files) {
            const filesArray = Array.from(evt.target.files);
            if (filesArray.some((file) => file.size > maxFileSize)) {
                setError("File size exceeds 15MB limit");
            } else if (filesArray.length > maxTotalFiles) {
                setError("Cannot select more than 10 files");
            } else {
                setSelectedFiles(filesArray);
                onDrop(evt.target.files);
                toast(`${evt.target.files.length} images successfully added!`);
            }
        }
    };

    const onDragOver = (evt: React.DragEvent<HTMLDivElement>) => {
        evt.preventDefault();
        setHighlight(true);
    };

    const onDragLeave = () => {
        setHighlight(false);
    };

    const handleDrop = (evt: React.DragEvent<HTMLDivElement>) => {
        evt.preventDefault();
        const files = evt.dataTransfer.files;
        if (files && files[0].type.match(accept)) {
            const filesArray = Array.from(files);
            if (filesArray.some((file) => file.size > maxFileSize)) {
                setError("File size exceeds 15MB limit");
            } else if (filesArray.length > maxTotalFiles) {
                setError("Cannot select more than 10 files");
            } else {
                setSelectedFiles(filesArray);
                onDrop(files);
                toast(`${files.length} images successfully added!`);
                setHighlight(false);
                setError(null);
            }
        } else {
            setError("Invalid file type");
        }
    };

    return (
        <div
            className={`border-2 border-dashed border-button-bg w-full p-4 rounded-lg my-4 ${
                highlight ? "bg-primary" : "bg-light-bg"
            }`}
            onClick={openFileDialog}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={handleDrop}
        >
            <input
                ref={fileInputRef}
                type="file"
                style={{ display: "none" }}
                onChange={onFilesAdded}
                accept={accept}
            />
            <p className="text-body">Drag 'n' drop some files here, or click to select files</p>
            {error && <p className="text-red-600 mt-2">{error}</p>}
            <div className="mt-4">
                {selectedFiles.map((file, index) => (
                    <img
                        key={index}
                        src={URL.createObjectURL(file)}
                        className="h-16 w-16 object-cover"
                        alt="preview"
                    />
                ))}
            </div>
        </div>
    );
};

export default Dropzone;
