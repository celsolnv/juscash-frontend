
# Configuração de Testes

Este projeto utiliza Vitest e Testing Library para testes unitários.

## Configuração do package.json

Adicione os seguintes scripts ao seu package.json:

```json
"scripts": {
  "test": "vitest run",
  "test:watch": "vitest",
  "test:ui": "vitest --ui",
  "test:coverage": "vitest run --coverage"
}
```

## Executando os testes

- `npm test` ou `yarn test` - Executa todos os testes uma vez
- `npm run test:watch` ou `yarn test:watch` - Executa os testes em modo watch
- `npm run test:coverage` ou `yarn test:coverage` - Executa os testes e gera relatório de cobertura

## Estrutura dos testes

Os testes devem ser colocados ao lado dos componentes que estão testando, com a extensão `.test.tsx` ou `.spec.tsx`.

## Utilitários de teste

Utilize as funções de `@/test/utils.tsx` para renderizar componentes com todos os providers necessários.

Exemplo:

```tsx
import { renderWithProviders, screen } from '@/test/utils';
import MeuComponente from './MeuComponente';

test('renderiza corretamente', () => {
  renderWithProviders(<MeuComponente />);
  expect(screen.getByText('Texto esperado')).toBeInTheDocument();
});
```
