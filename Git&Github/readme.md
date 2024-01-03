# Git y GitHub

- ¿Qué es Git?
  - Git es un sistema de control de versiones distribuido que permite gestionar el historial de cambios de un proyecto de software.
- ¿Por qué usar Git?
  - Git facilita el trabajo colaborativo en proyectos, permite controlar y revertir cambios, y brinda la posibilidad de experimentar en ramas sin afectar la versión principal.
- ¿Qué es GitHub?
  - GitHub es una plataforma de alojamiento de repositorios de Git en la nube, que ofrece funcionalidades adicionales como seguimiento de problemas, colaboración y despliegue automático.
- Ventajas de utilizar GitHub
  - Colaboración en proyectos: Permite trabajar de forma simultánea y coordinada en un proyecto, fusionando cambios de diferentes colaboradores.
  - Control de versiones: Facilita el seguimiento y gestión del historial de cambios, permitiendo regresar a versiones anteriores si es necesario.
  - Compartir código: Permite a otros desarrolladores acceder y colaborar en proyectos de código abierto.
- Funcionamiento básico de Git
  - Repositorio local: Almacenamiento local de los archivos y el historial de cambios de un proyecto.
  - Commits: Son los registros de los cambios realizados en el repositorio.
  - Ramas (Branches): Permiten trabajar en paralelo en diferentes versiones del proyecto.
- Uso básico de GitHub
  - Creación de un repositorio en GitHub: Permite crear un nuevo repositorio vacío en GitHub.
  - Clonar un repositorio: Descargar una copia local de un repositorio existente en GitHub.
  - Realizar cambios y hacer commits: Modificar archivos localmente y registrar los cambios en el repositorio.
  - Subir cambios al repositorio remoto: Enviar los cambios realizados localmente al repositorio en GitHub.
- Trabajo colaborativo con GitHub
  - Clonar un repositorio remoto: Descargar una copia de un repositorio remoto para trabajar en él.
  - Crear y trabajar en una rama: Permite trabajar en una versión separada del proyecto sin afectar la rama principal.
  - Realizar pull requests: Solicitar la revisión y la incorporación de cambios de una rama a otra.
  - Resolver conflictos: Solucionar discrepancias entre cambios realizados en diferentes ramas.
- Otras características de GitHub
  - Gestión de problemas (issues): Permite realizar un seguimiento de problemas, asignar tareas y facilitar la comunicación entre colaboradores.
  - Wiki y documentos: Proporciona un espacio para la documentación y el intercambio de conocimientos.
  - Integración con herramientas de desarrollo: Permite la automatización de tareas y la integración con herramientas externas.
- Conclusiones
  - Git y GitHub son herramientas fundamentales para el desarrollo de software, brindando un control eficiente de versiones y facilitando la colaboración entre desarrolladores.

Funcionamiento básico de Git:

1. Inicializar un repositorio: `git init`
2. Añadir archivos al área de preparación: `git add <nombre-archivo>`
3. Realizar un commit: `git commit -m "Mensaje del commit"`
4. Ver el historial de commits: `git log`
5. Crear una rama: `git branch <nombre-rama>`
6. Cambiar a una rama existente: `git checkout <nombre-rama>`
7. Fusionar ramas: `git merge <nombre-rama>`
8. Descargar cambios del repositorio remoto: `git pull`
9. Enviar cambios al repositorio remoto: `git push`

Uso básico de GitHub:

1. Crear un repositorio en GitHub: Ir a la página principal de GitHub y hacer clic en "New" para crear un nuevo repositorio.
2. Clonar un repositorio: `git clone <URL-repositorio>`
3. Realizar cambios y hacer commits: Modificar los archivos localmente y utilizar los comandos de Git para hacer commits.
4. Subir cambios al repositorio remoto: `git push origin <nombre-rama>`

Trabajo colaborativo con GitHub:

1. Clonar un repositorio remoto: `git clone <URL-repositorio>`
2. Crear y trabajar en una rama: `git branch <nombre-rama>` y `git checkout <nombre-rama>`
3. Realizar pull requests: En la página del repositorio en GitHub, hacer clic en "New pull request" para solicitar la revisión y la incorporación de cambios.
4. Resolver conflictos: En caso de conflictos, utilizar herramientas como `git mergetool` o editar manualmente los archivos para solucionar las discrepancias.

Estos son solo algunos de los comandos y conceptos básicos de Git y GitHub. Se recomienda consultar la documentación oficial de Git para obtener información más detallada.

Para obtener más información y referencias adicionales, puedes consultar este [cheat sheet de Git](https://training.github.com/downloads/es_ES/github-git-cheat-sheet/). Ofrece una guía rápida y práctica sobre los comandos y conceptos clave de Git.
