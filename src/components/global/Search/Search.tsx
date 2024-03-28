import React, { useState } from 'react';

const JobSearch = () => {
    const [jobTitle, setJobTitle] = useState<string>('');
    const [jobs, setJobs] = useState<{ id: number; title: string }[]>([]);

    const handleSearch = async () => {
        // Gọi hàm tìm kiếm công việc và cập nhật danh sách công việc
        const foundJobs = await searchJobs(jobTitle);
        setJobs(foundJobs);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ marginBottom: '10px' }}>
                <input
                    type="text"
                    placeholder="Enter job title"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    style={{ fontSize: '18px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginRight: '10px' }}
                />
                <button onClick={handleSearch} style={{ fontSize: '18px', padding: '10px 20px', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', border: 'none' }}>Search</button>
            </div>
            
            <div style={{ marginTop: '20px' }}>
                {jobs.length === 0 ? (
                    <p>No jobs found.</p>
                ) : (
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {jobs.map((job) => (
                            <li key={job.id} style={{ marginBottom: '5px', padding: '10px', border: '1px solid #ccc' }}>{job.title}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

// Hàm tìm kiếm công việc (có thể thay thế bằng một API call thực sự)
const searchJobs = async (jobTitle: string) => {
    // Emulate an asynchronous API call
    return new Promise<{ id: number; title: string }[]>((resolve) => {
        const mockJobData = [
            { id: 1, title: 'Software Engineer' },
            { id: 2, title: 'Web Developer' },
            { id: 3, title: 'Data Scientist' },
            { id: 4, title: 'Product Manager' },
            { id: 5, title: 'UX/UI Designer' },
        ];

        setTimeout(() => {
            const filteredJobs = mockJobData.filter((job) =>
                job.title.toLowerCase().includes(jobTitle.toLowerCase())
            );
            resolve(filteredJobs);
        }, 1000); // Simulate a delay of 1 second
    });
};

export default JobSearch;
