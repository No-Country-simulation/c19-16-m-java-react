import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from '@pages/Login/Login';
import { BrowserRouter as Router } from 'react-router-dom';

describe('LoginPage', () => {
  test('renders LoginPage component', () => {
    render(
      <Router>
        <LoginPage />
      </Router>
    );

    // Verifica que los elementos se rendericen correctamente
    expect(screen.getByText(/¡Bienvenid@!/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Correo electrónico/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Clave de ingreso/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Ingresar/i })).toBeInTheDocument();
  });

  test('shows error message for invalid email', () => {
    render(
      <Router>
        <LoginPage />
      </Router>
    );

    // Encuentra el campo de correo electrónico y escribe un correo no válido
    const emailInput = screen.getByPlaceholderText(/Ingresa tu correo electronico/i);
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.blur(emailInput);

    // Verifica que aparezca el mensaje de error
    expect(screen.getByText(/El correo electrónico introducido no es válido/i)).toBeInTheDocument();
  });

  test('shows error message for invalid password', () => {
    render(
      <Router>
        <LoginPage />
      </Router>
    );

    // Encuentra el campo de contraseña y escribe una contraseña no válida
    const passwordInput = screen.getByPlaceholderText(/Ingresa tu clave de acceso/i);
    fireEvent.change(passwordInput, { target: { value: 'pass' } });
    fireEvent.blur(passwordInput);

    // Verifica que aparezca el mensaje de error
    expect(screen.getByText(/La contraseña introducida no es valida/i)).toBeInTheDocument();
  });

  test('enables submit button when form is valid', () => {
    render(
      <Router>
        <LoginPage />
      </Router>
    );

    // Encuentra los campos de correo electrónico y contraseña
    const emailInput = screen.getByPlaceholderText(/Ingresa tu correo electronico/i);
    const passwordInput = screen.getByPlaceholderText(/Ingresa tu clave de acceso/i);
    const submitButton = screen.getByRole('button', { name: /Ingresar/i });

    // Inicialmente, el botón de enviar debe estar deshabilitado
    expect(submitButton).toBeDisabled();

    // Escribe un correo y una contraseña válidos
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'Password123!' } });

    // Verifica que el botón de enviar ahora esté habilitado
    expect(submitButton).not.toBeDisabled();
  });
});
