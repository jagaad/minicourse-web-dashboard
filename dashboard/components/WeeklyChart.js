import html from "../html.js";
import map from "../map.js";

let days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export function WeeklyChart({ values }) {
  return html`
    <section class="weekly-chart">
      ${map(values, (percentage, index) => {
        let opacity = percentage === 100 ? "1" : "0.2";
        let style = `height: ${percentage}%; opacity: ${opacity};`;
        let dayOfWeek = days[index];
        return html`
          <div class="weekly-chart-item">
            <div class="weekly-chart-item-text">${dayOfWeek}</div>
            <!-- The error is coming from lit-html extensions code is not broken -->
            <div class="weekly-chart-item-bar" style="${style}"></div>
          </div>
        `;
      })}
    </section>
  `;
}
