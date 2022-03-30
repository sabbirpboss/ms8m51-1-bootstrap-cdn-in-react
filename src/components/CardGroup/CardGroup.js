import React from "react";

const CardGroup = () => {
  return (
    <div>
      <h2 className="text-white bg-info d-inline-block p-4 mt-3 rounded">
        This is cards.
      </h2>
      <div className="container border border-primary rounded p-2">
        <button type="button" class="btn btn-primary">
          Primary
        </button>
        <button type="button" class="btn btn-secondary">
          Secondary
        </button>
        <button type="button" class="btn btn-success">
          Success
        </button>
        <button type="button" class="btn btn-danger">
          Danger
        </button>
        <button type="button" class="btn btn-warning">
          Warning
        </button>
        <button type="button" class="btn btn-info">
          Info
        </button>
        <button type="button" class="btn btn-light">
          Light
        </button>
        <button type="button" class="btn btn-dark">
          Dark
        </button>

        <button type="button" class="btn btn-link">
          Link
        </button>
      </div>
    </div>
  );
};

export default CardGroup;
