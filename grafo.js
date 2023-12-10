
function cargarDatos() {
    d3.json("nodes.js").then(function(nodos) {
        d3.json("links.js").then(function(aristas) {
            // Lógica para crear el grafo con los datos cargados
            mostrarMensaje("Datos cargados correctamente.");
            crearGrafo(nodos, aristas);
        }).catch(function(error) {
            mostrarMensaje("Error al cargar el archivo de aristas: " + error);
        });
    }).catch(function(error) {
        mostrarMensaje("Error al cargar el archivo de nodos: " + error);
    });
}

function crearGrafo(nodos, aristas) {
    // Configuración del contenedor y el lienzo
    var width = 800;
    var height = 600;

    var svg = d3.select("svg")
        .attr("width", width)
        .attr("height", height);

    // Crear una fuerza de D3.js para simular el layout del grafo
    var simulation = d3.forceSimulation(nodos)
        .force("link", d3.forceLink(aristas).id(d => d.id))
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter(width / 2, height / 2));

    // Crear enlaces (aristas)
    var enlaces = svg.selectAll("line")
        .data(aristas)
        .enter().append("line")
        .attr("stroke", "black");

    // Crear nodos
    var nodosGrafico = svg.selectAll("circle")
        .data(nodos)
        .enter().append("circle")
        .attr("r", 10)
        .attr("fill", "blue");

    // Crear etiquetas para los nodos
    var etiquetas = svg.selectAll("text")
        .data(nodos)
        .enter().append("text")
        .text(d => d.id)
        .attr("text-anchor", "middle")
        .attr("dy", -15);

    // Actualizar posiciones de los nodos y las etiquetas en cada iteración de la simulación
    simulation.on("tick", function () {
        nodosGrafico.attr("cx", d => d.x)
            .attr("cy", d => d.y);

        enlaces.attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        etiquetas.attr("x", d => d.x)
            .attr("y", d => d.y);
    });
}