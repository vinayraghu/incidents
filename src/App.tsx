import React from 'react';
import IncidentsList from './features/incidents/IncidentsList';
import styled from 'styled-components';

const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
`

function App() {
  return (
    <Container>
      <IncidentsList />
    </Container>
  );
}

export default App;
