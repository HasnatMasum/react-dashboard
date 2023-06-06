import { useContext } from "react";
import { ResponsivePie } from "@nivo/pie";
import { piData } from "../data/demoData";
import useThemeMode from "../hooks/useThemeMode";
import { themeModeContext } from "../App";

const ChartPi = ({ legends, height }) => {
  const {
    mode: { color4, color04 }
  } = useThemeMode();
  const { isDarkMode } = useContext(themeModeContext);
  return (
    <div style={{ position: "relative", height: height }}>
      <div style={{ position: "absolute", width: "100%", height: "100%" }}>
        <ResponsivePie
          data={piData}
          theme={{ textColor: isDarkMode ? color4 : color04 }}
          margin={{ top: 40 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          colors={{ scheme: "category10" }}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]]
          }}
          enableArcLinkLabels={legends ? true : false}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor={isDarkMode ? color4 : color04}
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          enableArcLabels={false}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]]
          }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              rotation: -45,
              lineWidth: 6,
              spacing: 10
            }
          ]}
          fill={[
            {
              match: {
                id: "ruby"
              },
              id: "dots"
            },
            {
              match: {
                id: "c"
              },
              id: "dots"
            },
            {
              match: {
                id: "go"
              },
              id: "dots"
            },
            {
              match: {
                id: "python"
              },
              id: "dots"
            },
            {
              match: {
                id: "scala"
              },
              id: "lines"
            },
            {
              match: {
                id: "lisp"
              },
              id: "lines"
            },
            {
              match: {
                id: "elixir"
              },
              id: "lines"
            },
            {
              match: {
                id: "javascript"
              },
              id: "lines"
            }
          ]}
          legends={legends}
        />
      </div>
    </div>
  );
};

export default ChartPi;
