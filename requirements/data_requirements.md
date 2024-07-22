### Requerimientos y Restricciones de los Campos

#### 1. Fecha de Nacimiento
- **Formato:** DD/MM/AAAA
- **Validación:** usuario escribe la fecha (no puede ser menor al 16 julio de 2006)
- **Restricción de Edad:** El usuario debe ser mayor de 18 años
- **Campo Obligatorio:** Sí

#### 2. ID (Nombre de Usuario-único)
- **Formato:** Alfanumérico
- **Restricciones:** sin espacios (el espacio se elimina de manera automática cuando se mueve el focus del campo) 
- **Longitud:** Entre 5 y 20 caracteres
- **Unicidad:** Debe ser único paraa toda la base de datos
- **Validación:** es igual al correo electrónico
- **Campo Obligatorio:** Sí

#### 3. Nombre
- **Formato:** Texto
- **Restricciones:** solo caracteeres del alfabeto latino. No permite caracteres especiales (solo consierar el uso de la ñ y sin tildes)
- **Longitud:** Entre 2 y 15 caracteres
- **Validación:** Solo letras y espacios
- **Campo Obligatorio:** Sí

#### 4. Correo Electrónico
- **Formato:** Formato de correo electrónico válido (e.g., usuario@dominio.com)
- **Unicidad:** Debe ser único
- **Campo Obligatorio:** Sí

#### 5. Contraseña
- **Formato:** Alfanumérico y caracteres especiales.
- **Restricciones:** sin espacios (el espacio se elimina de manera automática cuando se mueve el focus del campo) 
- **Longitud:** Mínimo 6 caracteres Máximo 20
- **Validación:** Debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial
- **Campo Obligatorio:** Sí

#### 6. Teléfono
- **Formato:** Numérico
- **Restricciones:** sin espacios (el espacio se elimina de manera automática cuando se mueve el focus del campo) 
- **Longitud:** 10 dígitos (hacerlo específico por país) (comentario: escoger un pais y hacerlo específico para este mismo: españa son 9, colombia 10 o que la longitud del campo depende del prefijo del país)
- **Validación:** Solo números, no espacios
- **Campo Obligatorio:** Sí

#### 7. DNI
- **Formato:** Alfanumérico
- **Longitud:** Entre 7 y 15 caracteres
- **Validación:** Solo números y letras del alfabeto latino (el espacio se elimina de manera automática cuando se mueve el focus del campo) 
- **Campo Obligatorio:** Sí
