import React, { useState } from "react";
import { toast } from "react-hot-toast";

type DropzoneProps = {
    onDrop: (selectedFiles: FileList | null) => void;
    accept: string;
    selectedFiles: File[];
    setSelectedFiles: React.Dispatch<React.SetStateAction<File[]>>;
};

const Dropzone: React.FC<DropzoneProps> = ({ onDrop, accept, selectedFiles, setSelectedFiles }) => {
    const [highlight, setHighlight] = useState(false);
    const [error, setError] = useState<string | null>(null);

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
            } else if (selectedFiles.length + filesArray.length > maxTotalFiles) {
                setError("Cannot select more than 10 files");
            } else {
                setSelectedFiles((prevFiles) => [...prevFiles, ...filesArray]);
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
            className={`min-h-24 flex flex-col justify-center border-2 border-dashed border-button-bg hover:border-gray-500 w-full p-4 rounded-lg my-4 ${
                highlight ? "border-gray-500" : "bg-light-bg"
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
            <p className="text-body text-center ">
                Drag 'n' drop some images here, or click to select images
            </p>
            {error && <p className="text-red-600 mt-2">{error}</p>}
            <div className="flex mt-4 space-x-4">
                {selectedFiles.map((file, index) => (
                    <img
                        key={index}
                        src={URL.createObjectURL(file)}
                        className="h-20 w-20 object-cover rounded-lg"
                        alt="preview"
                    />
                ))}
            </div>
        </div>
    );
};

export default Dropzone;
