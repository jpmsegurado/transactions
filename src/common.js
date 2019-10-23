export function formatCurrency (value) {
  const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
  return formatter.format(value);
}

export const SCREEN_SIZES = {
  SM_MAX: '720px',
  DESKTOP_MIN: '721px'
};