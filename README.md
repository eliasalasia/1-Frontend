Explicacion de lo que se hizo en el proyecto. 

(FALLAS: Intente solucionarlo pero no pude. se registra exitosamente, se Logea ingresa PERO no encuentro mi falla en porque se va la pagina en blanco creo que estoy usando mal el privateroute de igual manera si refresca la pagina luego de logearse va a la informacion de manera efectiva, el problema en la informacion es que estoy haciendo mal para leer la foto segun entiendo lo toma como que los datos son muy largos para leerlo. ahora con respecto en la actualizacion me funciona todo incluso cargo la foto pero obviamente falla en guardarse. lo que si no pude solucionar es que cuando se actualiza los datos queda tambien en blanco pero si vuelve a cargar sale la informacion actualizada. se que no esta completo pero son cosas que debo plantearme mejorar y donde estoy parado realmente son cosas que considero que puedo solucionar solo que mi organizacion en este proyecto no fue de la mas ordenada considero que no aplique bien el orden de empezar en la parte del frontend.) 

components/pagesmult/BtnLog:Descripcion: RENDERIZA UN CONJUNTOS DE BOTONES PARA INICIAR SESION CON GOOGLE, FACEBOOK, TWITTER Y GITHUB. ACTUALMENTE SOLO COLOQUE LA IMAGEN. 

components/pagesmult/Inputs: RENDERIZA UN FORMULARIO CON CAMPOS: CORREO ELECTRONICO Y PASSWORD.


CARPETA COMPONENTS REGISTER
BtnFormReg: Representaria un boton de registrado. 
EnlaceReg: redirige al usuario a la página de registro "/register" cuando se hace clic en el enlace.

CARPETA COMPONENTS LOGIN
BtnFormReg: Representaria un boton de inicio sesion.
EnlaceLog:redirige al usuario a la página de inicio de sesión "/login" cuando se hace clic en el enlace.

COMPONENTS/PRIVATEROUTE
Se esta implementando una ruta protegida, sirve para que solo los usuarios autenticados puedan acceder a ciertas partes de la aplicacion. 


 PAGES/REGISTER
 Maneja el registro de usuarios nuevos enviando datos(email y password) utilizando una solicitud  POST a `http://localhost:3000/api/register.`

 Componentes Utilizados:
 Inputs Componente que renderiza campos de entrada para correo electrónico y contraseña.

 Utiliza useNavigate de React Router para redirigir al usuario a la página principal ('/') después de un registro exitoso.

 Gestión de Errores: Maneja los errores de la solicitud POST mostrando mensajes de error si el registro no se realiza correctamente.




PAGES/LOGIN 
Utilizo useContext para acceder al contexto UserContext, que proporciona la función login necesaria para el inicio de sesión del usuario.

Manejo del Inicio de Sesión (handleLogin):
Captura el evento submit del formulario (onSubmit={handleLogin}).
Obtiene los valores de correo electrónico y contraseña del formulario.
Llama a la función login del contexto UserContext, pasando los datos de inicio de sesión ({ email, password }).
Si el inicio de sesión es exitoso, utiliza navigate de React Router para redirigir al usuario a la ruta protegida '/info'.
Si ocurre un error durante el inicio de sesión, alerta al usuario mostrando un mensaje de error específico (error.response?.data?.message) o un mensaje genérico ('Login failed').




PAGES/INFO 
muestra la página de información personal de un usuario autenticado.

Contexto de Usuario (useUser): Utiliza el hook useUser desde el contexto para obtener datos del usuario (user), estado de carga (loading), estado de autenticación (isAuthenticated), funciones para cerrar sesión (logout) y actualizar perfil (updateUser).

Redirección basada en Estado: Utiliza useNavigate para redirigir al usuario a la página de inicio de sesión ('/login') si no está autenticado (!isAuthenticated) y si la carga ha finalizado (!loading).

Estado de Menú (isMenuOpen): Utiliza el estado local isMenuOpen y la función toggleMenu para controlar la visibilidad del menú desplegable.

handleLogout: Maneja el evento de clic en el botón de logout, llama a logout del contexto y redirige al usuario a la página de inicio de sesión.

updateProfile: Define una función asincrónica para actualizar el perfil del usuario.

header Muestra el nombre del usuario y una imagen de perfil, con un menú desplegable que permite al usuario navegar a su perfil.

Edit Permite al usuario navegar a la página de edición de perfil ('/update') para realizar cambios en su información personal.



PAGES/UPDATE
permite a los usuarios autenticados actualizar su información personal, incluyendo su nombre, biografía, teléfono, correo electrónico, contraseña y foto de perfil.

isMenuOpen: Controla la visibilidad del menú desplegable.

formData: Almacena los datos del formulario para nombre, biografía, teléfono, correo electrónico y contraseña.

photo: Almacena la URL de la foto de perfil actual o la imagen predeterminada si no hay ninguna disponible.(En este caso sinceramente lo intente guiandome de video y de inteligencia artifical ya que no entendia porque no lo lee). 

updateMessage: Mensaje para mostrar al usuario después de actualizar su información.

fileInputRef: Referencia utilizada para acceder al elemento de entrada de archivo para cambiar la foto de perfil.

useUser es un hook personalizado que proporciona acceso al contexto de usuario, incluyendo datos del usuario, funciones de actualización. 

useEffect: Se utiliza para inicializar formData y photo con los datos del usuario.

toggleMenu: Alterna la visibilidad del menú desplegable cuando se hace clic en el nombre del usuario y su foto.

handleChange: Actualiza el estado de formData cuando se cambian los campos del formulario.

handlePhotoClick: Activa el input de tipo archivo para que el usuario pueda seleccionar una nueva foto de perfil.

handlePhotoChange: Actualiza el estado de photo con la URL de la imagen seleccionada por el usuario.

handleSubmit: Maneja la sumisión del formulario para actualizar la información del usuario. Utiliza updateUser para enviar los datos actualizados al servidor y muestra un mensaje de éxito o error en base a la respuesta.

SERVICES/USERCONTEXT: 
useState: Se utilizan hooks de estado (useState) para mantener el estado del usuario (user), indicar si se está cargando datos (loading), y verificar si el usuario está autenticado (isAuthenticated).


login: Envía una solicitud POST al servidor con el correo electrónico y la contraseña del usuario para iniciar sesión. Si la autenticación es exitosa, el token de acceso se guarda en el almacenamiento local (localStorage) y se actualiza el estado del usuario.

logout: Elimina el token de acceso del almacenamiento local y restablece el estado del usuario y la autenticación a sus valores iniciales.

updateUser: Realiza una solicitud PUT al servidor para actualizar la información del usuario con los datos proporcionados. El token de acceso se incluye en los encabezados para autenticación. Si la actualización es exitosa, el estado del usuario se actualiza con los nuevos datos devueltos por el servidor.

useEffect: Se utiliza para cargar los datos del usuario al inicio (fetchUserData). Si hay un token de acceso almacenado en localStorage, se realiza una solicitud GET al servidor para obtener los datos del usuario actual,Si no hay token de acceso o hay un error en la solicitud, se maneja la desconexión del usuario.

UserContext.Provider: Envuelve la aplicación con el contexto UserContext.Provider, proporcionando los valores del estado del usuario, funciones de autenticación y actualización a través del contexto para que puedan ser utilizados por otros componentes.

useUser: Hook personalizado que permite a otros componentes consumir el contexto UserContext, proporcionando acceso al estado del usuario








