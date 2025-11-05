import Image from 'next/image';
import styles from './styles/page.module.css';

const product = {
  brand: 'FreedomSteps',
  title: 'Унисекс Клоги из EVA «Sunrise»',
  subtitle: 'Лимитированная коллекция — вдохновлено карточкой Wildberries',
  article: 'WB-270-7046510',
  rating: 4.9,
  reviews: 1862,
  sold: '12,4K',
  price: 2890,
  oldPrice: 3690,
  discountTag: 'Супер скидка',
  color: 'Открытый жёлтый',
  sizes: ['36-37', '38-39', '40-41', '42-43', '44-45'],
  delivery: {
    label: 'Доставка завтра',
    description: 'Пункты выдачи Wildberries и курьером — бесплатно от 1000 ₽'
  },
  perks: [
    { title: 'EVA лёгкий', description: 'Обувь весит меньше 160 г, удобно на целый день' },
    { title: 'Антишок стелька', description: 'Анатомическая опора свода снижает усталость стопы' },
    { title: 'Влагостойкие', description: 'Не боятся дождя и легко моются под водой' }
  ],
  badges: ['Хит продаж', 'Выбор покупателей', 'Гарантия 60 дней'],
  details: [
    { label: 'Материал', value: 'EVA-пена, антискользящая подошва' },
    { label: 'Коллекция', value: 'Весна-Лето 2024' },
    { label: 'Страна', value: 'Россия' },
    { label: 'Посадка', value: 'Свободная, ортопедический профиль' }
  ]
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0
  }).format(value);

export default function Page() {
  return (
    <main>
      <article className={styles.card}>
        <div className={styles.ribbon}>{product.discountTag}</div>
        <section className={styles.gallery}>
          <div className={styles.preview}>
            <Image
              priority
              src="/product.jpg"
              alt={`${product.title} — ${product.color}`}
              width={720}
              height={720}
              className={styles.previewImage}
            />
            <div className={styles.previewGlow} />
          </div>
          <div className={styles.thumbnails}>
            {[1, 2, 3, 4].map((index) => (
              <button key={index} className={styles.thumbnailButton} type="button">
                <span className={styles.thumbnailOverlay} />
                <Image
                  src="/product.jpg"
                  alt={`Превью ${index}`}
                  width={96}
                  height={96}
                  className={styles.thumbnailImage}
                />
              </button>
            ))}
          </div>
        </section>

        <section className={styles.meta}>
          <header className={styles.header}>
            <div className={styles.badges}>
              {product.badges.map((badge) => (
                <span className={styles.badge} key={badge}>
                  {badge}
                </span>
              ))}
            </div>
            <span className={styles.brand}>{product.brand}</span>
            <h1 className={styles.title}>{product.title}</h1>
            <p className={styles.subtitle}>{product.subtitle}</p>
            <div className={styles.stats}>
              <span className={styles.rating}>
                ★ {product.rating}
                <span className={styles.ratingLabel}>&nbsp;({product.reviews} отзывов)</span>
              </span>
              <span className={styles.divider} aria-hidden="true" />
              <span className={styles.sold}>{product.sold} заказов</span>
              <span className={styles.divider} aria-hidden="true" />
              <span className={styles.article}>Арт. {product.article}</span>
            </div>
          </header>

          <section className={styles.pricing}>
            <div>
              <div className={styles.priceRow}>
                <span className={styles.price}>{formatCurrency(product.price)}</span>
                <span className={styles.oldPrice}>{formatCurrency(product.oldPrice)}</span>
              </div>
              <p className={styles.benefit}>Экономия {formatCurrency(product.oldPrice - product.price)}</p>
            </div>
            <button className={styles.ctaPrimary} type="button">
              Добавить в корзину
              <span className={styles.ctaShadow} />
            </button>
            <button className={styles.ctaSecondary} type="button">
              Купить сейчас
            </button>
            <p className={styles.deliveryLabel}>{product.delivery.label}</p>
            <p className={styles.deliveryDescription}>{product.delivery.description}</p>
          </section>

          <section className={styles.selector}>
            <div className={styles.selectorRow}>
              <span className={styles.selectorLabel}>Цвет:</span>
              <span className={styles.selectorValue}>{product.color}</span>
            </div>
            <div className={styles.selectorRow}>
              <span className={styles.selectorLabel}>Размер:</span>
              <div className={styles.sizes}>
                {product.sizes.map((size, index) => (
                  <button
                    key={size}
                    type="button"
                    className={index === 2 ? `${styles.sizeButton} ${styles.sizeButtonActive}` : styles.sizeButton}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.perks}>
            {product.perks.map((perk) => (
              <article key={perk.title} className={styles.perkCard}>
                <h3>{perk.title}</h3>
                <p>{perk.description}</p>
              </article>
            ))}
          </section>

          <section className={styles.details}>
            <h2>Подробнее о товаре</h2>
            <dl>
              {product.details.map((detail) => (
                <div key={detail.label} className={styles.detailRow}>
                  <dt>{detail.label}</dt>
                  <dd>{detail.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        </section>
      </article>
    </main>
  );
}
