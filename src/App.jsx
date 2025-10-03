import { useEffect } from 'react';
import { useGrid } from './hooks/useGrid';
import PixiRenderer from './components/PixiRenderer';

function App() {
    const { 
        cells, 
        rows, 
        cols, 
        stats,

        createGrid, 
        toggleCell, 
        getAllStates 
    } = useGrid(); // Custom hook to manage the grid
    
    useEffect(() => {
        createGrid(10, 10);
    }, [createGrid]);
    
    const handleCellClick = (cellId) => {
        toggleCell(cellId);
    };
    
    const handleExportData = () => {
        const data = getAllStates();
        console.log("� Export complet:", data);
        alert(`Grille exportée ! ${stats.aliveCells} cellules vivantes sur ${stats.totalCells}`);
    };

    return (
            <div className='h-full w-full'>
                
                <PixiRenderer 
                    cells={cells}
                    rows={rows}
                    cols={cols}
                    onCellClick={handleCellClick}
                />
            </div>
    );
}

export default App;
