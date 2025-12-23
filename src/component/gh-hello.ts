import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { formatHello } from '../utils/format';

@customElement('gh-hello')
export class GhHello extends LitElement {
    static styles = css`
    :host {
      display: inline-block;
      font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
    }

    .card {
      border: 1px solid rgba(0,0,0,0.15);
      border-radius: 12px;
      padding: 12px 14px;
      box-shadow: 0 4px 14px rgba(0,0,0,0.06);
    }

    .title {
      font-weight: 700;
      margin: 0 0 6px;
    }

    .text {
      margin: 0;
      opacity: 0.9;
    }
  `;

    @property({ type: String }) name: string = 'World';
    @state() startCount: number = 2;

    render() {
        return html`
      <div class="card">
        <p class="title">gh-hello: ${this.startCount}</p>
        <p class="text">${formatHello(this.name)}</p>
          <button @click="${this.setCount}"></button>
      </div>
    `;
    }

    setCount = () => {
        this.startCount += 1;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'gh-hello': GhHello;
    }
}
