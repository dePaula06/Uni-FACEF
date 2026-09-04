import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

function App() {
  return (
    <div className="container mt-5">

      <Typography variant="h3">
        StudentSort
      </Typography>

      <div className="row mt-4">

        <div className="col-md-4">
          <div className="border rounded p-4">
            <h4>Total de alunos</h4>
            <h2>42</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="border rounded p-4">
            <h4>Aprovados</h4>
            <h2>31</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="border rounded p-4">
            <h4>Reprovados</h4>
            <h2>11</h2>
          </div>
        </div>

      </div>

      <Button
        variant="contained"
        sx={{ mt: 4 }}
      >
        Cadastrar aluno
      </Button>

    </div>
  )
}

export default App