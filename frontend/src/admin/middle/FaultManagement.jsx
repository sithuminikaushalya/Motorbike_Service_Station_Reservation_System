// import React, { useState } from 'react';

// function FaultManagement() {
//   const [faults, setFaults] = useState([
//     { id: 1, name: 'Fault 1', option1: '', option2: '', option3: '' },
//     { id: 2, name: 'Fault 2', option1: '', option2: '', option3: '' },
//     { id: 3, name: 'Fault 3', option1: '', option2: '', option3: '' },
//   ]);

//   const handleInputChange = (id, field, value) => {
//     setFaults((prevFaults) =>
//       prevFaults.map((fault) =>
//         fault.id === id ? { ...fault, [field]: value } : fault
//       )
//     );
//   };

//   const handleSave = () => {
//     // Implement save functionality here
//     console.log('Faults saved:', faults);
//   };

//   return (
//     <div>
//       <h2>Fault Management</h2>
//       <div style={{ backgroundColor: '#ccc', padding: '20px', borderRadius: '8px' }}>
//         {faults.map((fault) => (
//           <div key={fault.id} style={{ marginBottom: '20px' }}>
//             <h3>{fault.name}</h3>
//             <form>
//               <label>Fault:</label>
//               <input
//                 type="text"
//                 value={fault.name}
//                 readOnly
//               />
//               <br />
//               <label>Option 1:</label>
//               <input
//                 type="text"
//                 value={fault.option1}
//                 onChange={(e) => handleInputChange(fault.id, 'option1', e.target.value)}
//               />
//               <br />
//               <label>Option 2:</label>
//               <input
//                 type="text"
//                 value={fault.option2}
//                 onChange={(e) => handleInputChange(fault.id, 'option2', e.target.value)}
//               />
//               <br />
//               <label>Option 3:</label>
//               <input
//                 type="text"
//                 value={fault.option3}
//                 onChange={(e) => handleInputChange(fault.id, 'option3', e.target.value)}
//               />
//             </form>
//           </div>
//         ))}
//         <div>
//           <button onClick={handleSave}>Save</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FaultManagement;
