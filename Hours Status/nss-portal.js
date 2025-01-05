// Sample data for the volunteer lookup
const volunteerData = {
    'John-123': {
        programs: [
            {
                name: 'Tree Plantation Drive',
                date: '2024-12-15',
                hours: 5,
                certificateStatus: 'Issued'
            },
            {
                name: 'Blood Donation Camp',
                date: '2024-12-20',
                hours: 8,
                certificateStatus: 'Pending'
            }
        ]
    }
};

document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('volunteerName').value.trim();
    const rollNo = document.getElementById('rollNo').value.trim();
    const searchKey = `${name}-${rollNo}`;
    
    const results = document.getElementById('results');
    
    if (volunteerData[searchKey]) {
        const table = document.getElementById('recordsTable');
        table.innerHTML = '';
        
        let totalHours = 0;
        
        volunteerData[searchKey].programs.forEach(program => {
            const row = table.insertRow();
            row.innerHTML = `
                <td>${program.name}</td>
                <td>${program.date}</td>
                <td>${program.hours}</td>
                <td>${program.certificateStatus}</td>
            `;
            totalHours += program.hours;
        });
        
        document.getElementById('totalHours').textContent = totalHours;
        results.style.display = 'block';
    } else {
        alert('No records found for the provided details.');
        results.style.display = 'none';
    }
});