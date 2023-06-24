import React, { useState } from "react";

type DropzoneProps = {
    onDrop: (selectedFiles: FileList | null) => void;
    accept: string;
};

const Dropzone: React.FC<DropzoneProps> = ({ onDrop, accept }) => {
    const [highlight, setHighlight] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fileInputRef = React.createRef<HTMLInputElement>();

    const openFileDialog = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const onFilesAdded = (evt: React.ChangeEvent<HTMLInputElement>) => {
        if (evt.target.files) {
            onDrop(evt.target.files);
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
            onDrop(files);
            setHighlight(false);
            setError(null);
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
        </div>
    );
};

export default Dropzone;
