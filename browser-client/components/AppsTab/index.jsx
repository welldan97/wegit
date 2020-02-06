// Imports
// =============================================================================

import React, { useState } from 'react';

import Apps from './Apps';
import CreateAppForm from './CreateAppForm';

// Main
// =============================================================================

export default function AppsTab({ apps, onCreate, onRun, onDelete }) {
  const [isCreating, setIsCreating] = useState(false);

  return (
    <>
      <div className="row mt-4">
        <div className="col-12">
          <h2>Apps</h2>
        </div>
      </div>
      <Apps apps={apps} onRun={onRun} onDelete={onDelete} />
      {isCreating && (
        <CreateAppForm
          onCancel={() => {
            setIsCreating(false);
          }}
          onSubmit={app => {
            setIsCreating(false);
            onCreate(app);
          }}
        />
      )}

      {!isCreating && (
        <div className="row mt-4">
          <div className="col-12 ">
            <button
              type="button"
              className="btn btn-success btn-lg mt-4 mx-auto d-block"
              onClick={() => setIsCreating(true)}
            >
              + Create
            </button>
          </div>
        </div>
      )}
    </>
  );
}
