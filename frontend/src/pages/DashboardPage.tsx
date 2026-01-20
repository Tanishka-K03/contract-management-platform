import { loadData, saveData } from '../services/storage';
import { canTransition } from '../utils/lifecycle';

const DashboardPage = () => {
  const contracts = loadData('contracts');

  const updateStatus = (id: string, status: string) => {
    const updated = contracts.map((c: any) =>
      c.id === id ? { ...c, status } : c
    );
    saveData('contracts', updated);
    window.location.reload();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Contracts Dashboard</h2>

      {contracts.map((c: any) => (
        <div key={c.id}>
          <b>{c.name}</b> — {c.status}

          {['APPROVED','SENT','SIGNED','LOCKED','REVOKED'].map((s) =>
            canTransition(c.status, s) ? (
              <button key={s} onClick={() => updateStatus(c.id, s)}>
                {s}
              </button>
            ) : null
          )}
        </div>
      ))}
    </div>
  );
};

export default DashboardPage;
