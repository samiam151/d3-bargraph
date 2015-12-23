var dataset = [],
   i = 0;
for(; i < 10; i++){
   dataset.push(Math.round(Math.random() * 25));
}

d3.select('.chart').selectAll('div')
   .data(dataset)
   .text(String)
   .enter()

   .append('div')
      .attr('class', 'bar')
      //.style('width', theData(d, 'px'))
      .style('height', function(d){return d * 15 + 'px';})
      .style('width', '45px')
      .append('p')
         .attr('class', 'innerText')
         .text(function(d){return d;})
;