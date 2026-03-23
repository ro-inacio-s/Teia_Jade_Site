// Este arquivo cria a galeria asimétrica lindamente renderizando as peças vindo de dados-galeria.js
const renderGaleria = () => {
    const container = document.getElementById('galeria-container');
    if (!container) return;

    let html = '';
    
    // Padrões de design dos blocos (vai rotacionar se houver mais de 8 peças)
    const layouts = [
        // 0: Large Featured Sculptural
        (item) => `
        <div class="md:col-span-8 group peca-item" data-categoria="${item.categoria}">
            <div class="relative overflow-hidden bg-surface-container-low aspect-[4/5] md:aspect-[16/10]">
                <img ${item.id !== 0 ? 'loading="lazy"' : ''} alt="${item.nome}" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100" src="${item.imagem}"/>
            </div>
            <div class="mt-8 flex flex-col md:flex-row md:justify-between items-start gap-6">
                <div class="max-w-md">
                    <h2 class="text-4xl font-headline text-primary mb-3">${item.nome}</h2>
                    <p class="text-on-surface-variant font-body mb-4">${item.descricao}</p>
                    <div class="flex gap-2">
                        ${item.tags.map(t => `<span class="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-label">${t}</span>`).join('')}
                    </div>
                </div>
                <div class="flex flex-col items-end gap-2">
                    ${item.etiqueta ? `<span class="text-xs font-label text-on-surface-variant uppercase tracking-widest">${item.etiqueta}</span>` : ''}
                    <a href="https://wa.me/5511942673681?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20a%20pe%C3%A7a%20${encodeURIComponent(item.nome)}." target="_blank" class="whatsapp-btn btn-interactive text-on-primary px-8 py-3 rounded-lg font-label tracking-wide flex items-center gap-2 active:scale-95 inline-block">Consultar WhatsApp</a>
                </div>
            </div>
        </div>`,
        // 1: Small Functional (Offset)
        (item) => `
        <div class="md:col-span-4 md:mt-32 group peca-item" data-categoria="${item.categoria}">
            <div class="bg-surface-container-high aspect-[3/4] relative overflow-hidden">
                <img loading="lazy" alt="${item.nome}" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" src="${item.imagem}"/>
            </div>
            <div class="mt-8">
                <h2 class="text-3xl font-headline text-primary mb-2">${item.nome}</h2>
                <p class="text-on-surface-variant font-body text-sm mb-4">${item.descricao}</p>
                <div class="flex flex-col gap-4 border-t border-outline-variant/20 pt-4">
                    <a href="https://wa.me/5511942673681?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20a%20pe%C3%A7a%20${encodeURIComponent(item.nome)}." target="_blank" class="whatsapp-btn btn-interactive text-on-primary px-6 py-2 rounded-lg font-label text-sm flex items-center justify-center gap-2 inline-block text-center">Consultar WhatsApp</a>
                    ${item.etiqueta ? `<span class="text-primary font-label text-xs uppercase tracking-widest text-center cursor-pointer hover:underline underline-offset-4">${item.etiqueta}</span>` : ''}
                </div>
            </div>
        </div>`,
        // 2: Medium Portrait Sculptural
        (item) => `
        <div class="md:col-span-5 group peca-item" data-categoria="${item.categoria}">
            <div class="bg-surface-container aspect-[2/3] relative overflow-hidden">
                <img loading="lazy" alt="${item.nome}" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" src="${item.imagem}"/>
            </div>
            <div class="mt-8">
                <h2 class="text-3xl font-headline text-primary mb-2">${item.nome}</h2>
                <p class="text-on-surface-variant font-body mb-4">${item.descricao}</p>
                <div class="flex items-center gap-6">
                    <a href="https://wa.me/5511942673681?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20a%20pe%C3%A7a%20${encodeURIComponent(item.nome)}." target="_blank" class="whatsapp-btn btn-interactive text-on-primary px-6 py-2 rounded-lg font-label text-sm inline-block">Consultar WhatsApp</a>
                </div>
            </div>
        </div>`,
        // 3: Wide Functional Art
        (item) => `
        <div class="md:col-span-7 md:self-center group peca-item" data-categoria="${item.categoria}">
            <div class="bg-surface-container-highest aspect-video relative overflow-hidden">
                <img loading="lazy" alt="${item.nome}" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" src="${item.imagem}"/>
            </div>
            <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 class="text-3xl font-headline text-primary mb-2">${item.nome}</h2>
                    <p class="text-on-surface-variant font-body">${item.descricao}</p>
                </div>
                <div class="md:text-right flex flex-col md:justify-end items-start md:items-end gap-4">
                    ${item.etiqueta ? `<span class="text-xs font-label text-on-surface-variant uppercase tracking-widest">${item.etiqueta}</span>` : ''}
                    <a href="https://wa.me/5511942673681?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20a%20pe%C3%A7a%20${encodeURIComponent(item.nome)}." target="_blank" class="whatsapp-btn btn-interactive text-on-primary px-8 py-3 rounded-lg font-label tracking-wide inline-block">Consultar WhatsApp</a>
                </div>
            </div>
        </div>`,
        // 4: Kokedama
        (item) => `
        <div class="md:col-span-4 group peca-item" data-categoria="${item.categoria}">
            <div class="bg-surface-container-low aspect-square relative overflow-hidden">
                <img loading="lazy" alt="${item.nome}" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" src="${item.imagem}"/>
            </div>
            <div class="mt-8">
                <h2 class="text-3xl font-headline text-primary mb-2">${item.nome}</h2>
                <p class="text-on-surface-variant font-body mb-4">${item.descricao}</p>
                <a href="https://wa.me/5511942673681?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20a%20pe%C3%A7a%20${encodeURIComponent(item.nome)}." target="_blank" class="whatsapp-btn btn-interactive text-on-primary px-6 py-2 rounded-lg font-label text-sm inline-block">Consultar WhatsApp</a>
            </div>
        </div>`,
        // 5: Decorative Knots
        (item) => `
        <div class="md:col-span-8 group peca-item" data-categoria="${item.categoria}">
            <div class="bg-surface-container-high aspect-[21/9] relative overflow-hidden">
                <img loading="lazy" alt="${item.nome}" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" src="${item.imagem}"/>
            </div>
            <div class="mt-8 flex flex-col md:flex-row md:justify-between items-end gap-6">
                <div class="max-w-xl">
                    <h2 class="text-3xl font-headline text-primary mb-2">${item.nome}</h2>
                    <p class="text-on-surface-variant font-body">${item.descricao}</p>
                </div>
                <a href="https://wa.me/5511942673681?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20a%20pe%C3%A7a%20${encodeURIComponent(item.nome)}." target="_blank" class="whatsapp-btn btn-interactive text-on-primary px-8 py-3 rounded-lg font-label tracking-wide whitespace-nowrap inline-block">Consultar WhatsApp</a>
            </div>
        </div>`,
        // 6: Accessory/Jewelry
        (item) => `
        <div class="md:col-span-6 md:mt-[-4rem] group peca-item" data-categoria="${item.categoria}">
            <div class="bg-surface-container aspect-square relative overflow-hidden">
                <img loading="lazy" alt="${item.nome}" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" src="${item.imagem}"/>
            </div>
            <div class="mt-8">
                <h2 class="text-3xl font-headline text-primary mb-2">${item.nome}</h2>
                <p class="text-on-surface-variant font-body mb-4">${item.descricao}</p>
                <a href="https://wa.me/5511942673681?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20a%20pe%C3%A7a%20${encodeURIComponent(item.nome)}." target="_blank" class="whatsapp-btn btn-interactive text-on-primary px-6 py-2 rounded-lg font-label text-sm inline-block">Consultar WhatsApp</a>
            </div>
        </div>`,
        // 7: Large Vertical Hanging
        (item) => `
        <div class="md:col-span-6 group peca-item" data-categoria="${item.categoria}">
            <div class="bg-surface-container-highest aspect-[3/4] relative overflow-hidden">
                <img loading="lazy" alt="${item.nome}" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" src="${item.imagem}"/>
            </div>
            <div class="mt-8">
                <h2 class="text-3xl font-headline text-primary mb-2">${item.nome}</h2>
                <p class="text-on-surface-variant font-body mb-4">${item.descricao}</p>
                <a href="https://wa.me/5511942673681?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20a%20pe%C3%A7a%20${encodeURIComponent(item.nome)}." target="_blank" class="whatsapp-btn btn-interactive text-on-primary px-8 py-3 rounded-lg font-label tracking-wide inline-block">Consultar WhatsApp</a>
            </div>
        </div>`
    ];

    galeriaDePecas.forEach((peca, iter) => {
        // Usa o id temporário para controle do loop e evitar bugs
        peca.id = iter;
        const layoutAtualIndex = iter % 8; // rotaciona a cada 8 peças preservando a grade asimétrica lindamente.
        html += layouts[layoutAtualIndex](peca);
    });

    container.innerHTML = html;
    iniciarFiltros();
};

const iniciarFiltros = () => {
    const botoes = document.querySelectorAll('.filtros button');
    botoes.forEach(btn => {
        btn.addEventListener('click', (e) => {
            botoes.forEach(b => {
                b.classList.remove('bg-primary', 'text-on-primary');
                b.classList.add('bg-surface-container-high', 'text-on-surface-variant');
            });
            e.target.classList.remove('bg-surface-container-high', 'text-on-surface-variant');
            e.target.classList.add('bg-primary', 'text-on-primary');

            const categoria = e.target.textContent;
            document.querySelectorAll('.peca-item').forEach(item => {
                if(categoria === 'Todas as Obras' || item.getAttribute('data-categoria') === categoria) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
};

// Auto executar assim que a página carregar
document.addEventListener('DOMContentLoaded', renderGaleria);
