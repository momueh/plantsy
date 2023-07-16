import React, { useState } from "react";
import { toast } from "react-hot-toast";

// DropzoneProps: Defines the properties for the Dropzone component.
type DropzoneProps = {
    onDrop: (selectedFiles: FileList | null) => void; // Callback function called when files are selected or dropped. It takes a FileList of selected files.
    accept: string; // A string that defines the types of files that the dropzone should accept. Example: 'image/png, image/jpeg'.
    selectedFiles: File[]; // An array of selected File objects.
    setSelectedFiles: React.Dispatch<React.SetStateAction<File[]>>; // A function to set the selectedFiles state.
};

/**
 * The Dropzone component. It renders a dropzone that accepts user's file drop or selection actions.
 * It validates the dropped or selected files against file type, number of files, and individual file size.
 * It uses state to manage internal state and toasts for feedback messages.
 */
const Dropzone: React.FC<DropzoneProps> = ({ onDrop, accept, selectedFiles, setSelectedFiles }) => {
    // State variables for highlight, error message and file input reference
    const [highlight, setHighlight] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const fileInputRef = React.createRef<HTMLInputElement>();

    // Constants for maximum file size (15MB) and maximum total files (10)
    const maxFileSize = 15 * 1024 * 1024; // 15MB in bytes
    const maxTotalFiles = 10;

    // Function to open the file dialog
    const openFileDialog = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    // Function to handle addition of files via file dialog
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
                toast.success(`${evt.target.files.length} images successfully added!`, {
                    position: "top-right",
                });
            }
        }
    };

    // Functions to handle file drag events
    const onDragOver = (evt: React.DragEvent<HTMLDivElement>) => {
        evt.preventDefault();
        setHighlight(true);
    };

    const onDragLeave = () => {
        setHighlight(false);
    };

    // Function to handle drop of files
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
                toast.success(`${files.length} images successfully added!`, {
                    position: "top-right",
                });
                setHighlight(false);
                setError(null);
            }
        } else {
            setError("Invalid file type");
        }
    };
    // The returned JSX of the Dropzone component
    return (
        <div
            className={`flex flex-col justify-center border-2 border-dashed border-button-bg hover:border-gray-500 w-full px-4 py-6 rounded-lg my-4 ${
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
            <p className="text-body text-center">
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
