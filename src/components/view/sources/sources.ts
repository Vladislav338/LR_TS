import './sources.css';
import type { NewsSource } from '../../types/api';

class Sources {
    draw(data: NewsSource[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');

        if (!sourceItemTemp) return;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

            const nameEl = sourceClone.querySelector('.source__item-name') as HTMLElement | null;
            if (nameEl) nameEl.textContent = item.name;

            const itemEl = sourceClone.querySelector('.source__item') as HTMLElement | null;
            if (itemEl && item.id) itemEl.setAttribute('data-source-id', item.id);

            fragment.appendChild(sourceClone);
        });

        const sourcesContainer = document.querySelector('.sources') as HTMLElement | null;
        if (!sourcesContainer) return;
        sourcesContainer.appendChild(fragment);
    }
}

export default Sources;