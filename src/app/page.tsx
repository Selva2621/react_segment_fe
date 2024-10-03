"use client";
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SchemaSidebar from '../components/SchemaPopup';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useRouter } from 'next/navigation';
import { ROUTES } from '../utils/routes';
import { Button } from 'primereact/button';
import { Chart } from 'primereact/chart';
import styles from '../styles/HomePageAnimations.module.css'; // Import your CSS module

const HomePage = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [segments, setSegments] = useState([]);
    const router = useRouter();

    const handleSave = (data: any) => {
        setSegments([...segments, data]);
        console.log('Segment saved:', data);
    };

    const navigateToSegments = () => {
        router.push(ROUTES.segments);
    };

    // Dummy data for charts
    const lineChartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Segments Created',
                data: [12, 19, 3, 5, 2, 3],
                fill: false,
                borderColor: '#42A5F5',
                tension: 0.4
            },
            {
                label: 'Segments Processed',
                data: [2, 3, 20, 5, 1, 4],
                fill: false,
                borderColor: '#FFA726',
                tension: 0.4
            }
        ]
    };

    const pieChartData = {
        labels: ['Processed', 'Pending', 'Failed'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: ['#42A5F5', '#66BB6A', '#FF6384'],
                hoverBackgroundColor: ['#64B5F6', '#81C784', '#FF6384']
            }
        ]
    };

    return (
        <div className="flex flex-col min-h-screen bg-white text-black">
            <Navbar onSaveSegment={() => setIsSidebarVisible(true)} />

            <SchemaSidebar
                visible={isSidebarVisible}
                onClose={() => setIsSidebarVisible(false)}
                onSave={handleSave}
            />

            <div className="flex-grow p-10 flex flex-col items-center justify-center text-center">
                <h1 className={`text-5xl font-bold mb-4 ${styles.animateFadeInDown}`}>
                    Welcome to My Assessment Dashboard
                </h1>
                <p className={`text-lg mb-6 max-w-xl ${styles.animateFadeInUp}`}>
                    Easily manage and view your saved segments in one place. Utilize our tools to create custom segments that suit your requirements.
                </p>

                <Button
                    label="Manage Segments"
                    onClick={navigateToSegments}
                    className="p-button-raised p-button-rounded p-button-lg p-3 bg-yellow-500 hover:bg-yellow-600 text-black shadow-lg transition-transform transform hover:scale-105"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-semibold mb-2">Total Segments</h2>
                    <p className="text-3xl font-bold text-blue-500">120</p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-semibold mb-2">Segments Processed</h2>
                    <p className="text-3xl font-bold text-green-500">85</p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-semibold mb-2">Failed Segments</h2>
                    <p className="text-3xl font-bold text-red-500">15</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
                {/* Line Chart */}
                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full">
                    <h2 className="text-xl font-semibold mb-4">Segment Trend</h2>
                    <div className="flex-grow">
                        <Chart type="line" data={lineChartData} options={{ responsive: true, maintainAspectRatio: false }} />
                    </div>
                </div>

                {/* Pie Chart */}
                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full">
                    <h2 className="text-xl font-semibold mb-4">Segment Status</h2>
                    <div className="flex-grow">
                        <Chart type="pie" data={pieChartData} options={{ responsive: true, maintainAspectRatio: false }} />
                    </div>
                </div>
            </div>

            {/* Saved Segments Section */}
            <div className="p-10 bg-white rounded-tl-3xl rounded-tr-3xl shadow-2xl">
                <h2 className="text-2xl font-semibold mb-4 text-center">Your Saved Segments</h2>
                <div className="overflow-x-auto">
                    <DataTable value={segments} paginator rows={5} emptyMessage="No segments saved yet." responsiveLayout="scroll">
                        <Column field="segment_name" header="Segment Name" />
                        <Column
                            field="schema"
                            header="Schemas"
                            body={rowData => rowData.schema.map((s: any) => JSON.stringify(s)).join(', ')}
                        />
                    </DataTable>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
