import { useState } from 'react';
import { saveData } from '../services/storage';

type FieldType = 'TEXT' | 'DATE' | 'SIGNATURE' | 'CHECKBOX';

interface Field {
  id: string;
  label: string;
  type: FieldType;
  x: number;
  y: number;
}

interface Blueprint {
  id: string;
  name: string;
  createdAt: string;
  fields: Field[];
}

const BlueprintPage = () => {
  const [name, setName] = useState('');
  const [fieldLabel, setFieldLabel] = useState('');
  const [fieldType, setFieldType] = useState<FieldType>('TEXT');
  const [fields, setFields] = useState<Field[]>([]);
  const [blueprints, setBlueprints] = useState<Blueprint[]>([]);

  const addField = () => {
    if (!fieldLabel.trim()) return;

    setFields([
      ...fields,
      {
        id: Date.now().toString(),
        label: fieldLabel,
        type: fieldType,
        x: 0,
        y: 0,
      },
    ]);
    setFieldLabel('');
  };

  const createBlueprint = () => {
    if (!name.trim()) return;

    const blueprint: Blueprint = {
      id: Date.now().toString(),
      name,
      fields,
      createdAt: new Date().toISOString(),
    };

    const updated = [...blueprints, blueprint];
    setBlueprints(updated);
    saveData('blueprints', updated);

    setName('');
    setFields([]);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Create Blueprint</h2>

      <input
        placeholder="Blueprint name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h3>Add Field</h3>

      <input
        placeholder="Field label"
        value={fieldLabel}
        onChange={(e) => setFieldLabel(e.target.value)}
      />

      <select
        value={fieldType}
        onChange={(e) => setFieldType(e.target.value as FieldType)}
      >
        <option value="TEXT">Text</option>
        <option value="DATE">Date</option>
        <option value="SIGNATURE">Signature</option>
        <option value="CHECKBOX">Checkbox</option>
      </select>

      <button onClick={addField}>Add Field</button>

      <ul>
        {fields.map((f) => (
          <li key={f.id}>{f.label} ({f.type})</li>
        ))}
      </ul>

      <button onClick={createBlueprint}>Create Blueprint</button>
    </div>
  );
};

export default BlueprintPage;
