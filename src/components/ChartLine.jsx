import { useContext } from "react";
import useThemeMode from "../hooks/useThemeMode";
import { themeModeContext } from "../App";
import { ResponsiveLine } from "@nivo/line";
import { lineData } from "../data/demoData";

const ChartLine = ({ height }) => {
  const {
    mode: { color4, color04 }
  } = useThemeMode();
  const { isDarkMode } = useContext(themeModeContext);
  return (
    <div style={{ position: "relative", height: height }}>
      <div style={{ position: "absolute", width: "100%", height: "100%" }}>
        <ResponsiveLine
          data={lineData}
          theme={{
            textColor: isDarkMode ? color4 : color04,
            fontSize: 11,
            axis: {
              domain: {
                line: {
                  stroke: "#777777",
                  strokeWidth: 1
                }
              },
              legend: {
                text: {
                  fontSize: 12,
                  fill: isDarkMode ? color4 : color04
                }
              },
              ticks: {
                line: {
                  stroke: "#777777",
                  strokeWidth: 1
                },
                text: {
                  fontSize: 11,
                  fill: isDarkMode ? color4 : color04
                }
              }
            }
          }}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "transportation",
            legendOffset: 36,
            legendPosition: "middle"
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "count",
            legendOffset: -40,
            legendPosition: "middle"
          }}
          colors={{ scheme: "nivo" }}
          pointSize={5}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabelYOffset={-12}
          areaOpacity={0.1}
          isInteractive={false}
          enableCrosshair={false}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
          motionConfig="default"
        />
      </div>
    </div>
  );
};

export default ChartLine;
