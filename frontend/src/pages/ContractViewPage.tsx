import { useState } from 'react';
import { loadData, saveData } from '../services/storage';
import { canTransition } from '../utils/lifecycle';

interface Field {
  id: string;
  label: string;
  type: 'TEXT' | 'DATE' | 'SIGNATURE' | 'CHECKBOX';
  value?: any;
}

interface Contract {
  id: string;
  name: string;
  blueprintName: string;
  fields: Field[];
  status: string;
  createdAt: string;
}

const ContractViewPage = () => {
  const contracts: Contract[] = loadData('contracts');
  const [selectedId, setSelectedId] = useState<string>('');

  const contract = contracts.find((c) => c.id === selectedId);

  const updateFieldValue = (fieldId: string, value: any) => {
    if (!contract || contract.status === 'LOCKED') return;

    const updatedContracts = contracts.map((c) =>
      c.id === contract.id
        ? {
            ...c,
            fields: c.fields.map((f) =>
              f.id === fieldId ? { ...f, value } : f
            ),
          }
        : c
    );

    saveData('contracts', updatedContracts);
  };

  const updateStatus = (newStatus: string) => {
    if (!contract || !canTransition(contract.status, newStatus)) return;

    const updatedContracts = contracts.map((c) =>
      c.id === contract.id ? { ...c, status: newStatus } : c
    );

    saveData('contracts', updatedContracts);
    window.location.reload();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>View Contract</h2>

      <select onChange={(e) => setSelectedId(e.target.value)}>
        <option value="">Select Contract</option>
        {contracts.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>

      {!contract && <p>Select a contract to view details.</p>}

      {contract && (
        <>
          <hr />

          <h3>{contract.name}</h3>
          <p><b>Blueprint:</b> {contract.blueprintName}</p>
          <p><b>Status:</b> {contract.status}</p>

          <h4>Fields</h4>

          {contract.fields.map((f) => (
            <div key={f.id} style={{ marginBottom: 10 }}>
              <label>{f.label}: </label>

              {f.type === 'TEXT' && (
                <input
                  type="text"
                  disabled={contract.status === 'LOCKED'}
                  value={f.value || ''}
                  onChange={(e) => updateFieldValue(f.id, e.target.value)}
                />
              )}

              {f.type === 'DATE' && (
                <input
                  type="date"
                  disabled={contract.status === 'LOCKED'}
                  value={f.value || ''}
                  onChange={(e) => updateFieldValue(f.id, e.target.value)}
                />
              )}

              {f.type === 'CHECKBOX' && (
                <input
                  type="checkbox"
                  disabled={contract.status === 'LOCKED'}
                  checked={!!f.value}
                  onChange={(e) =>
                    updateFieldValue(f.id, e.target.checked)
                  }
                />
              )}

              {f.type === 'SIGNATURE' && (
                <input
                  type="text"
                  placeholder="Type name as signature"
                  disabled={contract.status === 'LOCKED'}
                  value={f.value || ''}
                  onChange={(e) => updateFieldValue(f.id, e.target.value)}
                />
              )}
            </div>
          ))}

          <h4>Actions</h4>

          {['APPROVED', 'SENT', 'SIGNED', 'LOCKED', 'REVOKED'].map((s) =>
            canTransition(contract.status, s) ? (
              <button
