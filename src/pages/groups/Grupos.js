import grupos from './Grupos.module.css';
import ViewGroups from '../../components/viewGroups/ViewGroups';
import ModalGrupo from '../../components/groups/ModalGrupo'; // Asegúrate que la ruta sea correcta
import { useState } from 'react';

function Grupos({ users, tareasCreadas, setTareasCreadas }) {
  const [grupoSeleccionado, setGrupoSeleccionado] = useState(null);
  const handleAbrirModal = (grupo) => setGrupoSeleccionado(grupo);
  const handleCerrarModal = () => setGrupoSeleccionado(null);

  class PrototipoGrupos {
    constructor(id, nombreGrupo, integrantesGrupo, areaTrabajo) {
      this.id = id;
      this.nombreGrupo = nombreGrupo;
      this.integrantesGrupo = integrantesGrupo;
      this.areaTrabajo = areaTrabajo;
    }

    agregarIntegrante(integrante) {
      this.integrantesGrupo.push(integrante);
    }

    removerIntegrantePorCorreo(correo) {
      this.integrantesGrupo = this.integrantesGrupo.filter(
        (i) => i.correo !== correo
      );
    }

    obtenerLider() {
      return this.integrantesGrupo.find((i) => i.rol === "líder");
    }
  }

  const gruposCreados = [
    new PrototipoGrupos(
      1,
      "Grupo 1",
      [
        { nombre: users[0].username, correo: users[0].useremail, rol: "líder" },
        { nombre: users[1].username, correo: users[1].useremail, rol: "miembro" }
      ],
      "Desarrollo Web"
    ),
    new PrototipoGrupos(
      2,
      "Grupo 2",
      [
        { nombre: users[1].username, correo: users[1].useremail, rol: "líder" },
        { nombre: users[0].username, correo: users[0].useremail, rol: "miembro" }
      ],
      "Desarrollo de API"
    )
  ];

  return (
    <div className={grupos.grupos_container}>
      <div className={grupos.card}>
        <div className="custom-card-header">
          <div className="custom-header-content">
            <h6 className="custom-header-title">Grupos a los que perteneces</h6>
          </div>
        </div>

        <div className={grupos.groups_section}>
          {gruposCreados.map((grupo) => (
            <ViewGroups
              key={grupo.id}
              nombre={grupo.nombreGrupo}
              area={grupo.areaTrabajo}
              onClick={() => handleAbrirModal(grupo)}
            />
          ))}
        </div>
      </div>

      {grupoSeleccionado && (
        <ModalGrupo grupo={grupoSeleccionado} onClose={handleCerrarModal} tareasCreadas={tareasCreadas}/>
      )}
    </div>
  );
}

export default Grupos;