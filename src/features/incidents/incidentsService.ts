import incidentsData from '../../data/incidentsData';
import { IncidentsInterface } from './incidents.types';

const fetchIncidents = (): Promise<Array<IncidentsInterface>> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      return res(incidentsData)
    }, 1000)
  })
}

export { fetchIncidents }