const ProgressBar = ({ activeIndex }) => {
  const steps = [
    {
      index: 0,
      label: "Choose Category",
    },
    {
      index: 1,
      label: "Add Information",
    },
    {
      index: 2,
      label: "Add Picture",
    },
    {
      index: 3,
      label: "Review Post",
    },
  ];

  return (
    <div className="progress-container">
      <ul className="progress-indicator">
        {steps.map((step) => (
          <li
            key={step.index}
            className={`
            progress-step
            ${activeIndex === step.index ? "active" : "inactive"}
            ${activeIndex > step.index ? "complete" : "incomplete"}
          `}
          >
            <span className="step-number">{step.index + 1}</span>
            <h3>{step.label}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgressBar;
