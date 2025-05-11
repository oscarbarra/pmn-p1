
import viewGrupos from './ViewGroups.module.css'

function ViewGroups({ nombre, area }) {
  return (
    <div className={viewGrupos.group_card}>
        <div>
            <div className={viewGrupos.group_content}>
                <h6 className={viewGrupos.card_title}> {nombre} </h6>
                <p className={viewGrupos.card_text}> {area} </p>

                <div className={viewGrupos.chart_wrapper}>
                
                </div>

                <hr className={viewGrupos.divider}/>

                <div className={viewGrupos.card_footer}>
                    <i className="material-symbols-rounded icon">groups</i>
                    <p className={viewGrupos.footer_text}>Miembros del grupo</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ViewGroups;