export default function meter(props) {
  const colorChanger = (num) => {
    /* TIER 1 */
    if (num >= 1 && num <= 3) {
      return {
        stroke: "var(--meter-red)",
        strokeDashoffset: 220 - num * 13.2 + "px",
      };
    } else if (num > 3 && num <= 5) {
      /* TIER 2 */
      return {
        stroke: "var(--meter-yellow)",
        strokeDashoffset: 220 - num * 13.2 + "px",
      };
    } else if (num > 5 && num <= 8) {
      /* TIER 3 */
      return {
        stroke: "var(--meter-orange)",
        strokeDashoffset: 220 - num * 13.2 + "px",
      };
    } else if (num > 8 && num <= 10) {
      /* TIER 4 */
      return {
        stroke: "var(--meter-green)",
        strokeDashoffset: 220 - num * 13.2 + "px",
      };
    } else {
      /* ERROR CASE */
      return { stroke: "var(--meter-red)" };
    }
  };

  return (
    /* METER */
    <div className="relative h-[70px] w-[70px]">
      <svg id="meter" className="h-[70px] w-[70px]" style={colorChanger(props.meterNumber)}>
        <circle cx="35" cy="35" r="30" strokeLinecap="round" />
      </svg>

      {/* GRAY EMPTY METER */}
      <svg id="meter-bg" className="h-[70px] w-[70px]">
        <circle cx="35" cy="35" r="30" strokeLinecap="round" />
      </svg>
      {/* METER NUMBER */}
      <div className="absolute inset-0 flex items-center justify-center text-3xl">{props.meterNumber <= 10 && props.meterNumber > 0 ? props.meterNumber : "Err"}</div>
    </div>
  );
}
