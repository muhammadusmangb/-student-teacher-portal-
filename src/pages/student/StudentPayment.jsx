import React, { useState } from "react";
import { STUDENT } from "../../data/mockData";

export default function StudentPayment() {
  const [copied, setCopied] = useState(null);

  function copyVoucher(id, idx) {
    navigator.clipboard?.writeText(id);
    setCopied(idx);
    setTimeout(() => setCopied(null), 1500);
  }

  return (
    <div>
      <div className="card-blue">
        <div style={{ color: "#9CB4E8", marginBottom: 10 }}>To pay your fee via JazzCash:</div>
        <ol style={{ color: "#9CB4E8", paddingLeft: 20, lineHeight: 1.9, margin: 0 }}>
          <li>Open JazzCash app</li>
          <li>Click on <b>More</b></li>
          <li>Go to <b>Education</b> tab</li>
          <li>Click <b>Universities</b></li>
          <li>Select <b>Saylani Education</b> from the list</li>
          <li>Paste your <b>Voucher ID</b></li>
          <li>Pay your fee</li>
        </ol>
        <button className="btn-primary" style={{ marginTop: 16 }}>Watch JazzCash Guide Video</button>
      </div>

      {STUDENT.fees.map((f, i) => (
        <div className="card" key={i}>
          <div className="row">
            <h3 style={{ margin: 0 }}>{f.month}</h3>
            <span className="badge badge-green">{f.status}</span>
          </div>
          <div className="muted" style={{ marginBottom: 14 }}>Due: {f.due}</div>

          <div className="row">
            <span className="muted">Amount:</span>
            <span>Rs: {f.amount} /-</span>
          </div>
          <div className="row" style={{ marginTop: 8 }}>
            <span className="muted">Type:</span>
            <span>{f.type}</span>
          </div>
          <div className="row" style={{ marginTop: 8 }}>
            <span className="muted">Voucher ID:</span>
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {f.voucherId}
              <button
                onClick={() => copyVoucher(f.voucherId, i)}
                style={{ background: "var(--card)", border: "1px solid var(--card-border)", borderRadius: 8, color: "var(--text)", padding: "4px 8px", fontSize: ".75rem" }}
              >
                {copied === i ? "Copied" : "Copy"}
              </button>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
