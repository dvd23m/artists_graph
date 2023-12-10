// grafo.js
// Cargar datos
Promise.all([
    d3.json("nodes.json"),
    d3.json("links.json")
  ]).then(function(data) {
    const nodes = data[0];
    const links = data[1];
  
    // Crear fuerza de enlace
    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id))
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(400, 300)); // Ajusta según sea necesario
  
    // Crear enlaces
    const link = d3.select("svg")
      .selectAll("line")
      .data(links)
      .enter()
      .append("line");
  
    // Crear nodos
    const node = d3.select("svg")
      .selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("r", 10);
  
    // Añadir eventos de arrastre
    node.call(d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended));
  
    // Actualizar posición de nodos y enlaces en cada iteración
    simulation.on("tick", function() {
      link.attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);
  
      node.attr("cx", d => d.x)
        .attr("cy", d => d.y);
    });
  
    // Funciones para manejar eventos de arrastre
    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }
  
    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }
  
    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
  });
  
  