var data = [0];
var svgContainer = d3.select('body').append('svg')
                .attr('width', 200)
                .attr('height', 200)
    .attr('class', 'demo-tooltip');

        var groups = svgContainer.selectAll('g')
                .data(data)
                .enter()
                .append('g');

        groups.append('circle')
                .attr('cx', 100)
                .attr('cy', 100)
                .attr('r', 25)
                .attr('fill', 'blue');
