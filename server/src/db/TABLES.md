## Tabela de Produtos:

- id: Identificador único do produto (chave primária).
- nome: Nome do produto.
- descrição: Descrição do produto.
- preço: Preço unitário do produto.
- estoque: Quantidade em estoque.
- categoria_id: Chave estrangeira referenciando a tabela de categorias.
- marca: Marca do produto.
- data_cadastro: Data de cadastro do produto.

## Tabela de Categorias:

- id: Identificador único da categoria (chave primária).
- nome: Nome da categoria.
- descrição: Descrição da categoria.

## Tabela de Imagens de Produtos:

- id: Identificador único da imagem (chave primária).
- produto_id: Chave estrangeira referenciando a tabela de produtos.
- caminho: Caminho para a imagem do produto.
- principal: Indicador se a imagem é a principal para o produto.

## Tabela de Atributos:

- id: Identificador único do atributo (chave primária).
- nome: Nome do atributo (por exemplo, tamanho, cor, material).
- tipo: Tipo de atributo (por exemplo, texto, lista de opções).
- valores: Lista de valores possíveis para o atributo (se aplicável).

## Tabela de Atributos do Produto:

- id: Identificador único da associação entre produto e atributo (chave primária).
- produto_id: Chave estrangeira referenciando a tabela de produtos.
- atributo_id: Chave estrangeira referenciando a tabela de atributos.
- valor: Valor do atributo para o produto.