import { render, screen } from '@testing-library/react';
import Header from './components/Header';
import '@testing-library/jest-dom/extend-expect'; // Importar para usar toBeInTheDocument()

describe('Header Component', () => {
  it('renders initials in Avatar', () => {
    render(<Header name="John" lastname="Doe" />);

    const avatarInitials = screen.getByText('JD');
    expect(avatarInitials).toBeInTheDocument(); // Usar toBeInTheDocument() aquí
  });

  it('renders full name in header', () => {
    render(<Header name="John" lastname="Doe" />);

    const fullName = screen.getByText('John Doe');
    expect(fullName).toBeInTheDocument(); // Usar toBeInTheDocument() aquí
  });
});
