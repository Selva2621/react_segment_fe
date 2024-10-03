"use client";
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import SchemaSidebar from '../../components/SchemaPopup';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useRouter } from 'next/navigation';
import { ROUTES } from '../../utils/routes';
import { Button } from 'primereact/button';

const Page = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [segments, setSegments] = useState([]);
    const router = useRouter();

    const handleSave = (data: any) => {
        setSegments([...segments, data]);
        console.log('Segment saved:', data);
    };

    const navigateToHome = () => {
        router.push(ROUTES.home);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar onSaveSegment={() => setIsSidebarVisible(true)} />

            <SchemaSidebar
                visible={isSidebarVisible}
                onClose={() => setIsSidebarVisible(false)}
                onSave={handleSave}
            />

            <div className="flex-grow p-4">
                <h2 className="text-xl mb-4">Saved Segments</h2>
                <DataTable value={segments} paginator rows={5}>
                    <Column field="segment_name" header="Segment Name" />
                    <Column 
                        field="schema" 
                        header="Schemas" 
                        body={rowData => rowData.schema.map((s: any) => JSON.stringify(s)).join(', ')} 
                    />
                </DataTable>
            </div>

            {/* Button Container */}
            <div className="flex justify-center items-center mt-auto p-4">
                <Button label="Go to Home" onClick={navigateToHome} className="p-button p-button-raised p-button-rounded p-button-lg bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-transform transform hover:scale-105p-button p-button-raised p-button-rounded p-button-lg bg-green-500 hover:bg-green-600 text-white shadow-md transition-transform transform hover:scale-105" />
            </div>
        </div>
    );
};

export default Page;
