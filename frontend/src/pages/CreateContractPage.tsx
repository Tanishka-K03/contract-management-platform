import { useState } from 'react';
import { loadData, saveData } from '../services/storage';

const CreateContractPage = () => {
  const blueprints = loadData('blueprints');
  const [name, setName] = useState('');
  const [blueprintId, setBlueprintId] = useState('');

  const createContract = () => {
    const blueprint = blueprints.find((b: any) => b.id === blueprintId);
    if (!blueprint) return;

    const contract = {
      id: Date.now().toString(),
      name,
      blueprintName: blueprint.name,
      fields: blueprint.fields,
      status: 'CREATED',
      createdAt: new Date().toISOString(),
    };

    saveData('contracts', [...loadData('contracts'), contract]);
    alert('Contract Created');
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Create Contract</h2>

      <input
        placeholder="Contract name"
        onChange={(e) => setName(e.target.value)}
      />

      <select onChange={(e) => setBlueprintId(e.target.value)}>
        <option>Select Blueprint</option>
        {blueprints.map((b: any) => (
          <option key={b.id} value={b.id}>{b.name}</option>
        ))}
      </select>

      <button onClick={createContract}>Create Contract</button>
    </div>
  );
};

export default CreateContractPage;
