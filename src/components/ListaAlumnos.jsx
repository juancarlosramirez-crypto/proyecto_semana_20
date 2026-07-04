import { TarjetaAlumno } from './TarjetaAlumno';

export const ListaAlumnos = () => {
  const alumnos = [
    { id: 1, nombre: 'María Fernández', grado: '9°', seccion: 'A' },
    { id: 2, nombre: 'Carlos Hernández', grado: '8°', seccion: 'B' },
    { id: 3, nombre: 'Ana López', grado: '9°', seccion: 'A' },
  ];

  return (
    <div>
      {alumnos.map((alumno) => (
        <TarjetaAlumno
          nombre={alumno.nombre}
          grado={alumno.grado}
          seccion={alumno.seccion}
        />
      ))}
    </div>
  );
};
