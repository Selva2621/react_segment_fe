import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { AiOutlineMinus } from "react-icons/ai";
import styles from "../styles/SchemaPopup.module.css";
import { sendWebhook } from "../utils/api";

const SchemaSidebar = ({ onClose, visible, onSave }) => {
    const [segmentName, setSegmentName] = useState("");
    const [schemas, setSchemas] = useState([{ id: 1, label: "", value: null }]);

    const options = [
        { label: "First Name", value: "first_name" },
        { label: "Last Name", value: "last_name" },
        { label: "Gender", value: "gender" },
        { label: "Age", value: "age" },
        { label: "Account Name", value: "account_name" },
        { label: "City", value: "city" },
        { label: "State", value: "state" },
    ];

    const addNewSchema = () => {
        setSchemas([...schemas, { id: schemas.length + 1, label: "", value: null }]);
    };

    const handleDropdownChange = (id, selectedValue) => {
        const updatedSchemas = schemas.map((schema) =>
            schema.id === id ? { ...schema, value: selectedValue } : schema
        );
        setSchemas(updatedSchemas);
    };

    const removeSchema = (id) => {
        setSchemas(schemas.filter(schema => schema.id !== id));
    };

    const saveSegment = async () => {
        const schemaData = schemas
            .filter((schema) => schema.value) // Filter out any schemas without a value
            .map((schema) => ({ [schema.value]: schema.label })); // Format schema for output

        const data = {
            segment_name: segmentName,
            schema: schemaData,
        };


        try {
            await sendWebhook(data);
            onSave(data);
            onClose();
        } catch (error) {
            console.error("Error sending webhook:", error);
        }
        onSave(data);
        onClose();
    };

    return (
        <div className={`sidebar ${visible ? "show" : "hide"}`}>
            <div className={styles["sidebar-header"]}>
                <Button
                    icon="pi pi-arrow-left"
                    onClick={onClose}
                    className={`p-button-text ${styles["back-button"]}`}
                />
                <h2>Add Segment</h2>
                <Button
                    icon="pi pi-times"
                    onClick={onClose}
                    className="p-button-text"
                />
            </div>

            <div className={styles["sidebar-content"]}>
                <label className="block mb-1">Name of the Segment</label>
                <input
                    type="text"
                    value={segmentName}
                    onChange={(e) => setSegmentName(e.target.value)}
                    placeholder="Enter the Name of the Segment"
                    className="input"
                />

                <p className="mb-2">
                    To save your segment, you need to add the schemas to build the query.
                </p>

                <div className={`${styles['label-container']} mb-4`}>
                    <span className={`${styles['color-circle']} ${styles['green-circle']}`}></span>
                    <span className={styles['label-text']}> User Traits</span>

                    <span className={`${styles['color-circle']} ${styles['red-circle']}`}></span>
                    <span className={styles['label-text']} style={{ marginLeft: '16px' }}>Group Traits</span>
                </div>

                <div className="schemas-container mb-4">
                    {schemas.map((schema) => (
                        <div key={schema.id} className="mb-2" style={{ display: 'flex', alignItems: 'center' }}>
                            <span className={`${styles['color-circle']} ${schema.value === "account_name" ? styles['red-circle'] : styles['green-circle']}`}></span>
                            <Dropdown
                                value={schema.value}
                                options={options}
                                onChange={(e) => handleDropdownChange(schema.id, e.value)}
                                placeholder="Add schema to segment"
                                className="p-dropdown"
                            />
                            <AiOutlineMinus
                                className={styles['minus-icon']}
                                onClick={() => removeSchema(schema.id)}
                            />
                        </div>
                    ))}
                </div>

                <span onClick={addNewSchema} className={styles["add-schema-button"]}>
                    + Add new schema
                </span>
            </div>

            <div className={styles["button-container"]}>
                <Button
                    label="Cancel"
                    onClick={onClose}
                    className={`p-button-secondary ${styles["cancel-button"]}`}
                />
                <Button
                    label="Save the Segment"
                    onClick={saveSegment}
                    className={`p-button ${styles["save-segment-button"]}`}
                />
            </div>
        </div>
    );
};

export default SchemaSidebar;