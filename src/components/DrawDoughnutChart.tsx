// @ts-ignore
import * as d3 from "d3";

const DrawDoughnutChart = async (element: HTMLDivElement, data: {value: number}[], colors: string[], iconSources: string[]) => {
    // green and white
    const boxSize = 960; // graph boxsize, in pixels
    const width = 960; // outer width, in pixels
    const height = 960; // outer height, in pixels
    const innerRadius = 300; // inner radius of pie, in pixels (non-zero for donut)
    const outerRadius = Math.min(width, height) / 2;
    const padAngle = 0.08; // spacing between segments
    const cornerRadius = 20; // outer radius of pie, in pixels

    d3.select(element).select("svg").remove(); // Remove the old svg

    const icons = await Promise.all(
        iconSources.map(src => {
            return new Promise<HTMLImageElement>((resolve) => {
                const img = new Image();
                img.src = src;
                img.onload = () => resolve(img);
            });
        })
    );
    // Create new svg
    const svg = d3
        .select(element)
        .append("svg")
        .attr("preserveAspectRatio", "xMidYMid meet")
        .attr("height", "100%")
        .attr("width", "100%")
        .attr("class", "doughnut-svg")
        .attr("viewBox", `0 0 ${boxSize} ${boxSize}`)
        .append("g")
        .attr("transform", `translate(${boxSize / 2}, ${boxSize / 2})`);

    // add second line of text in middle of doughnut
    svg.append("text")
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .attr("font-family", "Maison Neue")
        .attr("font-size", "44")
        .attr("fill", "#B8B8B8")
        .attr("dy", "0em") // how far apart it shows up
        .text("FROM JUL 21 TO 23") // add first line of text in middle  of doughnut

    svg.append("text")
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .attr("font-family", "Maison Neue")
        .attr("font-size", "84")
        .attr("fill", "#eeeeee")
        .attr("dy", "1em")
        .text("100,000");

    const arcGenerator = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius).padAngle(padAngle).cornerRadius(cornerRadius);
    // @ts-ignore
    const pieGenerator = d3.pie().value((d) => d.value);
    // @ts-ignore
    const arcs = svg.selectAll().data(pieGenerator(data)).enter();
    // @ts-ignore
    arcs
        .append("path")
        // @ts-ignore
        .attr("d", arcGenerator)
        .style("fill", (d, i) => colors[i % data.length]);

    arcs.each((d, i) => {
        // @ts-ignore
        const [x, y] = arcGenerator.centroid(d); // Calculate center of each segment
        const icon = icons[i];
        const iconSize = 60; // Adjust size of icons

        svg.append("image")
            .attr("xlink:href", icon.src)
            .attr("x", x - iconSize / 2)
            .attr("y", y - iconSize / 2)
            .attr("width", iconSize)
            .attr("height", iconSize);
    });
};

export default DrawDoughnutChart;