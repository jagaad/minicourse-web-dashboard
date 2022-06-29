import html from "../html.js";
import map from "../map.js";
import { LocationCard } from "./LocationCard.js";
import { PlanningCard } from "./PlanningCard.js";
import { TwoColumns } from "./TwoColumns.js";
import { StatsCard } from "./StatsCard.js";
import { WeeklyChart } from "./WeeklyChart.js";

export function App({ locationData, planningData, statsData, weeklyData }) {
  let locationCardChildren = map(locationData, (item) => LocationCard(item));
  let planningCardChildren = map(planningData, (item) => PlanningCard(item));
  let statsDataChildren = map(statsData, (item) => StatsCard(item));

  return html`
    <div class="app">
      <main>
        <div style="margin-bottom: 20px;">
          ${TwoColumns({ children: locationCardChildren })}
        </div>
        ${TwoColumns({ children: planningCardChildren })}
      </main>
      <aside>
        <div style="margin-bottom: 20px;">
          ${TwoColumns({ children: statsDataChildren })}
        </div>
        ${WeeklyChart({ values: weeklyData })}
      </aside>
    </div>
  `;
}
