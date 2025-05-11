document.addEventListener('DOMContentLoaded', function() {
    initCharts();
});
const energyCtx = document.getElementById('energyChart');
if (energyCtx) {
    new Chart(energyCtx, {
        // chart config
    });
}
