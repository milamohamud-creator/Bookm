/**
 * LUMINA BOOKS — UNIVERSITY MIS MANAGEMENT SYSTEM
 * Pure Vanilla JavaScript & Browser LocalStorage Engine
 */

// ================= STORAGE KEYS & APP STATE =================
const STORAGE_KEYS = {
  BOOKS: 'lumina_mis_books_v1',
  SALES: 'lumina_mis_sales_v1',
  CUSTOMERS: 'lumina_mis_customers_v1'
};

// Initial Seed Data for University MIS Presentation
const SEED_BOOKS = [
  {
    id: 'BK-1001',
    title: 'Clean Code: Handbook of Agile Software Craftsmanship',
    author: 'Robert C. Martin',
    category: 'Technology',
    price: 44.99,
    quantity: 14,
    isbn: '978-0132350884',
    cover: 'https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?auto=format&fit=crop&w=600&q=80',
    soldCount: 28
  },
  {
    id: 'BK-1002',
    title: 'Atomic Habits: Proven Way to Build Good Habits',
    author: 'James Clear',
    category: 'Business',
    price: 21.99,
    quantity: 22,
    isbn: '978-0735211292',
    cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
    soldCount: 45
  },
  {
    id: 'BK-1003',
    title: 'A Brief History of Time',
    author: 'Stephen Hawking',
    category: 'Science',
    price: 18.50,
    quantity: 8,
    isbn: '978-0553380163',
    cover: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=600&q=80',
    soldCount: 19
  },
  {
    id: 'BK-1004',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    category: 'Fiction',
    price: 14.99,
    quantity: 3, // Low Stock intentionally for demo
    isbn: '978-0060935467',
    cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80',
    soldCount: 34
  },
  {
    id: 'BK-1005',
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    category: 'History',
    price: 24.95,
    quantity: 11,
    isbn: '978-0062316097',
    cover: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80',
    soldCount: 39
  },
  {
    id: 'BK-1006',
    title: 'Principles of Economics (10th Edition)',
    author: 'N. Gregory Mankiw',
    category: 'Education',
    price: 89.00,
    quantity: 6,
    isbn: '978-0357722718',
    cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80',
    soldCount: 16
  },
  {
    id: 'BK-1007',
    title: 'The Little Prince',
    author: 'Antoine de Saint-Exupéry',
    category: "Children's Books",
    price: 12.50,
    quantity: 18,
    isbn: '978-0156012195',
    cover: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80',
    soldCount: 22
  },
  {
    id: 'BK-1008',
    title: 'The Meaning of the Holy Qur’an',
    author: 'Abdullah Yusuf Ali',
    category: 'Religion',
    price: 29.99,
    quantity: 9,
    isbn: '978-1590080252',
    cover: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=600&q=80',
    soldCount: 15
  },
  {
    id: 'BK-1009',
    title: 'Deep Work: Rules for Focused Success',
    author: 'Cal Newport',
    category: 'Business',
    price: 19.99,
    quantity: 4, // Low Stock intentionally
    isbn: '978-1455586691',
    cover: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80',
    soldCount: 26
  },
  {
    id: 'BK-1010',
    title: 'Introduction to Algorithms (CLRS)',
    author: 'Thomas H. Cormen',
    category: 'Technology',
    price: 95.00,
    quantity: 5, // Low stock boundary
    isbn: '978-0262046305',
    cover: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=600&q=80',
    soldCount: 12
  },
  {
    id: 'BK-1011',
    title: 'Cosmos: A Personal Voyage',
    author: 'Carl Sagan',
    category: 'Science',
    price: 22.00,
    quantity: 13,
    isbn: '978-0345331359',
    cover: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
    soldCount: 18
  },
  {
    id: 'BK-1012',
    title: "Harry Potter & the Sorcerer's Stone",
    author: 'J.K. Rowling',
    category: "Children's Books",
    price: 16.99,
    quantity: 2, // Low stock
    isbn: '978-0590353427',
    cover: 'https://images.unsplash.com/photo-1550399105-c4db5fb85c18?auto=format&fit=crop&w=600&q=80',
    soldCount: 41
  }
];

const SEED_CUSTOMERS = [
  { id: 'CUST-201', name: 'Dean Alexander Wright', phone: '(555) 782-9901', email: 'a.wright@university.edu', ordersCount: 5, totalSpent: 284.50, joinedDate: '2026-08-15' },
  { id: 'CUST-202', name: 'Prof. Evelyn Vance', phone: '(555) 341-2098', email: 'e.vance@university.edu', ordersCount: 8, totalSpent: 412.00, joinedDate: '2026-08-20' },
  { id: 'CUST-203', name: 'Marcus Sterling', phone: '(555) 609-1234', email: 'm.sterling@student.edu', ordersCount: 2, totalSpent: 66.98, joinedDate: '2026-09-02' },
  { id: 'CUST-204', name: 'Fatima Al-Mansoor', phone: '(555) 890-4521', email: 'f.almansoor@domain.org', ordersCount: 4, totalSpent: 189.20, joinedDate: '2026-09-14' },
  { id: 'CUST-205', name: 'Chloe Bennett', phone: '(555) 412-8876', email: 'chloe.b@creative.com', ordersCount: 3, totalSpent: 92.48, joinedDate: '2026-10-01' }
];

const SEED_SALES = [
  {
    receiptId: 'RCP-2026-1001',
    date: '2026-10-25 09:42',
    customerId: 'CUST-201',
    customerName: 'Dean Alexander Wright',
    items: [
      { id: 'BK-1001', title: 'Clean Code', price: 44.99, quantity: 1, subtotal: 44.99 },
      { id: 'BK-1010', title: 'Introduction to Algorithms', price: 95.00, quantity: 1, subtotal: 95.00 }
    ],
    subtotal: 139.99,
    discountRate: 10,
    discountAmount: 14.00,
    tax: 6.30,
    grandTotal: 132.29,
    paymentMethod: 'Card',
    tendered: 132.29,
    change: 0.00
  },
  {
    receiptId: 'RCP-2026-1002',
    date: '2026-10-26 14:15',
    customerId: 'CUST-202',
    customerName: 'Prof. Evelyn Vance',
    items: [
      { id: 'BK-1002', title: 'Atomic Habits', price: 21.99, quantity: 2, subtotal: 43.98 },
      { id: 'BK-1005', title: 'Sapiens', price: 24.95, quantity: 1, subtotal: 24.95 }
    ],
    subtotal: 68.93,
    discountRate: 5,
    discountAmount: 3.45,
    tax: 3.27,
    grandTotal: 68.75,
    paymentMethod: 'Cash',
    tendered: 70.00,
    change: 1.25
  },
  {
    receiptId: 'RCP-2026-1003',
    date: '2026-10-27 11:20',
    customerId: 'CUST-203',
    customerName: 'Marcus Sterling',
    items: [
      { id: 'BK-1012', title: "Harry Potter & the Sorcerer's Stone", price: 16.99, quantity: 1, subtotal: 16.99 }
    ],
    subtotal: 16.99,
    discountRate: 0,
    discountAmount: 0.00,
    tax: 0.85,
    grandTotal: 17.84,
    paymentMethod: 'Mobile Pay',
    tendered: 17.84,
    change: 0.00
  }
];

// App Global State
let books = [];
let sales = [];
let customers = [];
let currentCart = [];
let currentTab = 'dashboard';
let currentPaymentMethod = 'Cash';
let chartInstances = {};

// Fallback SVG generator for books without images or broken links
function generateBookSvgCover(title, category) {
  const safeTitle = (title || 'Book Title').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const colors = {
    'Education': '#1e3a8a',
    'Fiction': '#7c2d12',
    'Science': '#065f46',
    'Technology': '#1e293b',
    'History': '#78350f',
    'Business': '#1e40af',
    'Religion': '#581c87',
    "Children's Books": '#be185d'
  };
  const bg = colors[category] || '#1e3a8a';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="420" viewBox="0 0 300 420">
    <rect width="300" height="420" fill="${bg}"/>
    <rect x="15" y="15" width="270" height="390" fill="none" stroke="#fde68a" stroke-width="2" stroke-dasharray="4 2"/>
    <circle cx="150" cy="90" r="32" fill="rgba(255,255,255,0.1)"/>
    <text x="150" y="98" fill="#fde68a" font-family="sans-serif" font-size="28" text-anchor="middle">📖</text>
    <text x="150" y="170" fill="#ffffff" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle">
      ${safeTitle.length > 25 ? safeTitle.substring(0, 22) + '...' : safeTitle}
    </text>
    <text x="150" y="210" fill="#93c5fd" font-family="sans-serif" font-size="12" text-anchor="middle">${category || 'University Book'}</text>
    <text x="150" y="360" fill="rgba(255,255,255,0.5)" font-family="sans-serif" font-size="10" text-anchor="middle">LUMINA UNIVERSITY PRESS</text>
  </svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

// ================= LOCAL STORAGE MANAGER =================
function loadData() {
  try {
    const storedBooks = localStorage.getItem(STORAGE_KEYS.BOOKS);
    const storedSales = localStorage.getItem(STORAGE_KEYS.SALES);
    const storedCustomers = localStorage.getItem(STORAGE_KEYS.CUSTOMERS);

    books = storedBooks ? JSON.parse(storedBooks) : [...SEED_BOOKS];
    sales = storedSales ? JSON.parse(storedSales) : [...SEED_SALES];
    customers = storedCustomers ? JSON.parse(storedCustomers) : [...SEED_CUSTOMERS];

    if (!storedBooks) saveData(STORAGE_KEYS.BOOKS, books);
    if (!storedSales) saveData(STORAGE_KEYS.SALES, sales);
    if (!storedCustomers) saveData(STORAGE_KEYS.CUSTOMERS, customers);
  } catch (err) {
    console.error('LocalStorage load failed, fallback to seeds:', err);
    books = [...SEED_BOOKS];
    sales = [...SEED_SALES];
    customers = [...SEED_CUSTOMERS];
  }
}

function saveData(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    showToast('Storage quota exceeded or unavailable', 'danger');
  }
}

function resetToSeedData() {
  localStorage.removeItem(STORAGE_KEYS.BOOKS);
  localStorage.removeItem(STORAGE_KEYS.SALES);
  localStorage.removeItem(STORAGE_KEYS.CUSTOMERS);
  books = JSON.parse(JSON.stringify(SEED_BOOKS));
  sales = JSON.parse(JSON.stringify(SEED_SALES));
  customers = JSON.parse(JSON.stringify(SEED_CUSTOMERS));
  currentCart = [];
  saveData(STORAGE_KEYS.BOOKS, books);
  saveData(STORAGE_KEYS.SALES, sales);
  saveData(STORAGE_KEYS.CUSTOMERS, customers);
  renderAllViews();
  showToast('Demo data restored successfully!', 'success');
}

// ================= TOAST NOTIFICATIONS =================
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let icon = 'fa-circle-info';
  if (type === 'success') icon = 'fa-circle-check';
  if (type === 'danger') icon = 'fa-circle-exclamation';
  if (type === 'warning') icon = 'fa-triangle-exclamation';

  toast.innerHTML = `
    <i class="fa-solid ${icon}"></i>
    <div><strong>${message}</strong></div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ================= NAVIGATION & VIEW SWITCHING =================
function initNavigation() {
  const navButtons = document.querySelectorAll('.nav-link');
  const jumpButtons = document.querySelectorAll('[data-tab-jump]');

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      switchTab(target);
    });
  });

  jumpButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tabJump;
      switchTab(target);
    });
  });

  // Mobile drawer controls
  const menuToggle = document.getElementById('menuToggleBtn');
  const closeSidebar = document.getElementById('closeSidebarBtn');
  const sidebar = document.getElementById('sidebar');

  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => sidebar.classList.add('open'));
  }
  if (closeSidebar && sidebar) {
    closeSidebar.addEventListener('click', () => sidebar.classList.remove('open'));
  }

  // Quick Action Topbar Buttons
  document.getElementById('quickAddBookBtn')?.addEventListener('click', () => openBookModal());
  document.getElementById('quickNewSaleBtn')?.addEventListener('click', () => switchTab('pos'));
  document.getElementById('resetDemoBtn')?.addEventListener('click', () => {
    openConfirmModal(
      'Reset All Demo Data?',
      'This will reset books, customer records, and sales history back to the original seed state.',
      () => resetToSeedData()
    );
  });

  // Start Realtime Header Clock
  setInterval(updateHeaderClock, 1000);
  updateHeaderClock();
}

function switchTab(tabId) {
  currentTab = tabId;

  // Update Sidebar active state
  document.querySelectorAll('.nav-link').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });

  // Update Section Visibility
  document.querySelectorAll('.content-section').forEach(sec => {
    sec.classList.remove('active');
  });
  const activeSec = document.getElementById(`section-${tabId}`);
  if (activeSec) activeSec.classList.add('active');

  // Update Topbar Titles
  const pageTitle = document.getElementById('pageTitle');
  const pageSubtitle = document.getElementById('pageSubtitle');

  const titles = {
    dashboard: ['Dashboard', 'Executive overview & performance indicators'],
    books: ['Book Catalog & Management', 'Search, add, edit, and organize academic titles'],
    pos: ['Point of Sale (POS)', 'Register terminal, checkout, and receipt issuance'],
    sales: ['Sales History & Receipts', 'Audit trail of past bookstore transactions'],
    inventory: ['Inventory & Stock Control', 'Monitor stock levels, warnings, and valuations'],
    customers: ['Customer Management', 'University faculty, students, and visitor records'],
    reports: ['MIS Executive Reports', 'Strategic data visualizations and performance charts']
  };

  if (titles[tabId]) {
    pageTitle.textContent = titles[tabId][0];
    pageSubtitle.textContent = titles[tabId][1];
  }

  // Close mobile sidebar if open
  document.getElementById('sidebar')?.classList.remove('open');

  // Trigger renders if needed
  if (tabId === 'reports') {
    setTimeout(renderMISCharts, 50);
  } else if (tabId === 'pos') {
    renderPosCatalog();
    renderPosCart();
  }
}

function updateHeaderClock() {
  const clockEl = document.getElementById('currentTime');
  if (!clockEl) return;
  const now = new Date();
  clockEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

// ================= 1. DASHBOARD VIEW =================
function renderDashboard() {
  // KPIs
  const totalBooksCount = books.length;
  const totalPhysicalCopies = books.reduce((sum, b) => sum + Number(b.quantity || 0), 0);
  const totalRevenue = sales.reduce((sum, s) => sum + Number(s.grandTotal || 0), 0);
  const totalCustomersCount = customers.length;
  const lowStockBooks = books.filter(b => Number(b.quantity) <= 5);

  document.getElementById('kpiTotalBooks').textContent = totalBooksCount;
  document.getElementById('kpiTotalCopies').textContent = `${totalPhysicalCopies} copies in stock`;
  document.getElementById('kpiTotalSales').textContent = `$${totalRevenue.toFixed(2)}`;
  document.getElementById('kpiSalesCount').textContent = `${sales.length} orders processed`;
  document.getElementById('kpiTotalCustomers').textContent = totalCustomersCount;
  document.getElementById('kpiLowStock').textContent = lowStockBooks.length;

  // Sidebar low stock badge
  const sidebarBadge = document.getElementById('sidebarLowStockBadge');
  if (sidebarBadge) {
    sidebarBadge.textContent = lowStockBooks.length;
    sidebarBadge.style.display = lowStockBooks.length > 0 ? 'inline-block' : 'none';
  }

  // Low stock warning banner
  const banner = document.getElementById('lowStockBanner');
  const bannerText = document.getElementById('lowStockBannerText');
  if (banner) {
    if (lowStockBooks.length > 0) {
      banner.style.display = 'flex';
      bannerText.textContent = `${lowStockBooks.length} book titles have 5 or fewer copies remaining. Review stock to prevent inventory depletion.`;
    } else {
      banner.style.display = 'none';
    }
  }

  document.getElementById('bannerViewInventoryBtn')?.addEventListener('click', () => switchTab('inventory'));

  // Dashboard Recent Sales Table
  const tbody = document.getElementById('dashboardRecentSalesBody');
  if (tbody) {
    const recent = [...sales].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);
    if (recent.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" class="text-center text-muted">No sales records yet.</td></tr>`;
    } else {
      tbody.innerHTML = recent.map(sale => `
        <tr>
          <td><strong>${sale.receiptId}</strong></td>
          <td>${sale.customerName}</td>
          <td>${sale.items.length} item(s)</td>
          <td><strong>$${Number(sale.grandTotal).toFixed(2)}</strong></td>
          <td><small class="text-muted">${sale.date.split(' ')[0]}</small></td>
          <td>
            <button class="btn btn-sm btn-outline" onclick="viewReceiptById('${sale.receiptId}')">
              <i class="fa-solid fa-receipt"></i> Receipt
            </button>
          </td>
        </tr>
      `).join('');
    }
  }

  // Best Selling Books
  const bestList = document.getElementById('dashboardBestSellersList');
  if (bestList) {
    const sorted = [...books].sort((a, b) => (b.soldCount || 0) - (a.soldCount || 0)).slice(0, 5);
    bestList.innerHTML = sorted.map((book, idx) => `
      <li class="best-seller-item">
        <div class="best-seller-rank rank-${idx + 1}">${idx + 1}</div>
        <img class="best-seller-thumb" src="${book.cover}" alt="${book.title}" onerror="this.onerror=null; this.src='${generateBookSvgCover(book.title, book.category)}';">
        <div class="best-seller-info">
          <strong>${book.title}</strong>
          <small>${book.author} &bull; ${book.category}</small>
        </div>
        <div class="best-seller-stats">
          <span>${book.soldCount || 0} sold</span>
          <small>$${(Number(book.soldCount || 0) * Number(book.price)).toFixed(2)} rev</small>
        </div>
      </li>
    `).join('');
  }
}

// ================= 2. BOOK CATALOG MANAGEMENT =================
let bookCatalogView = 'grid'; // 'grid' or 'table'

function initBookCatalog() {
  document.getElementById('bookSearchInput')?.addEventListener('input', renderBooksCatalog);
  document.getElementById('bookCategoryFilter')?.addEventListener('change', renderBooksCatalog);
  document.getElementById('bookStockFilter')?.addEventListener('change', renderBooksCatalog);
  document.getElementById('bookSortBy')?.addEventListener('change', renderBooksCatalog);

  document.getElementById('viewGridBtn')?.addEventListener('click', () => {
    bookCatalogView = 'grid';
    document.getElementById('viewGridBtn').classList.add('active');
    document.getElementById('viewTableBtn').classList.remove('active');
    renderBooksCatalog();
  });

  document.getElementById('viewTableBtn')?.addEventListener('click', () => {
    bookCatalogView = 'table';
    document.getElementById('viewTableBtn').classList.add('active');
    document.getElementById('viewGridBtn').classList.remove('active');
    renderBooksCatalog();
  });

  document.getElementById('openAddBookModalBtn')?.addEventListener('click', () => openBookModal());
  document.getElementById('resetBookFiltersBtn')?.addEventListener('click', () => {
    document.getElementById('bookSearchInput').value = '';
    document.getElementById('bookCategoryFilter').value = 'All';
    document.getElementById('bookStockFilter').value = 'All';
    document.getElementById('bookSortBy').value = 'titleAsc';
    renderBooksCatalog();
  });

  // Modal Form Submit
  document.getElementById('bookForm')?.addEventListener('submit', handleSaveBook);

  // Live cover preview
  document.getElementById('bookCoverInput')?.addEventListener('input', (e) => {
    const preview = document.getElementById('bookCoverPreview');
    const title = document.getElementById('bookTitleInput').value || 'Book';
    const cat = document.getElementById('bookCategorySelect').value || 'General';
    preview.src = e.target.value.trim() || generateBookSvgCover(title, cat);
  });
}

function renderBooksCatalog() {
  const search = (document.getElementById('bookSearchInput')?.value || '').toLowerCase().trim();
  const catFilter = document.getElementById('bookCategoryFilter')?.value || 'All';
  const stockFilter = document.getElementById('bookStockFilter')?.value || 'All';
  const sortBy = document.getElementById('bookSortBy')?.value || 'titleAsc';

  let filtered = books.filter(b => {
    const matchSearch = b.title.toLowerCase().includes(search) ||
                        b.author.toLowerCase().includes(search) ||
                        (b.isbn && b.isbn.toLowerCase().includes(search));
    const matchCat = (catFilter === 'All') || (b.category === catFilter);
    let matchStock = true;
    const qty = Number(b.quantity);
    if (stockFilter === 'InStock') matchStock = qty > 5;
    else if (stockFilter === 'LowStock') matchStock = qty > 0 && qty <= 5;
    else if (stockFilter === 'OutOfStock') matchStock = qty === 0;

    return matchSearch && matchCat && matchStock;
  });

  // Sorting
  filtered.sort((a, b) => {
    if (sortBy === 'titleAsc') return a.title.localeCompare(b.title);
    if (sortBy === 'titleDesc') return b.title.localeCompare(a.title);
    if (sortBy === 'priceLow') return Number(a.price) - Number(b.price);
    if (sortBy === 'priceHigh') return Number(b.price) - Number(a.price);
    if (sortBy === 'stockLow') return Number(a.quantity) - Number(b.quantity);
    if (sortBy === 'stockHigh') return Number(b.quantity) - Number(a.quantity);
    return 0;
  });

  document.getElementById('catalogFilteredCount').textContent = filtered.length;

  const gridContainer = document.getElementById('booksGridContainer');
  const tableContainer = document.getElementById('booksTableContainer');
  const emptyState = document.getElementById('booksEmptyState');

  if (filtered.length === 0) {
    gridContainer.style.display = 'none';
    tableContainer.style.display = 'none';
    emptyState.style.display = 'block';
    return;
  }

  emptyState.style.display = 'none';

  if (bookCatalogView === 'grid') {
    tableContainer.style.display = 'none';
    gridContainer.style.display = 'grid';

    gridContainer.innerHTML = filtered.map(book => {
      const qty = Number(book.quantity);
      let stockClass = 'badge-in-stock';
      let stockLabel = `${qty} in stock`;
      if (qty === 0) {
        stockClass = 'badge-out-of-stock';
        stockLabel = 'Out of Stock';
      } else if (qty <= 5) {
        stockClass = 'badge-low-stock';
        stockLabel = `Low: ${qty} left`;
      }

      return `
        <div class="book-card">
          <div class="book-card-cover-wrapper">
            <img class="book-card-cover" src="${book.cover}" alt="${book.title}" onerror="this.onerror=null; this.src='${generateBookSvgCover(book.title, book.category)}';">
            <span class="book-card-category-badge">${book.category}</span>
            <span class="book-card-stock-pill ${stockClass}">${stockLabel}</span>
          </div>
          <div class="book-card-body">
            <h4 class="book-card-title" title="${book.title}">${book.title}</h4>
            <div class="book-card-author"><i class="fa-solid fa-feather-pointed"></i> ${book.author}</div>
            <div class="book-card-footer">
              <span class="book-card-price">$${Number(book.price).toFixed(2)}</span>
              <div class="book-card-actions">
                <button class="btn-icon-action" onclick="openBookModal('${book.id}')" title="Edit Book">
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="btn-icon-action delete" onclick="confirmDeleteBook('${book.id}')" title="Delete Book">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');

  } else {
    gridContainer.style.display = 'none';
    tableContainer.style.display = 'block';

    const tbody = document.getElementById('booksTableBody');
    tbody.innerHTML = filtered.map(book => {
      const qty = Number(book.quantity);
      let stockBadge = `<span class="badge badge-in-stock">${qty} In Stock</span>`;
      if (qty === 0) stockBadge = `<span class="badge badge-out-of-stock">Out of Stock</span>`;
      else if (qty <= 5) stockBadge = `<span class="badge badge-low-stock">Low (${qty})</span>`;

      return `
        <tr>
          <td>
            <img src="${book.cover}" alt="${book.title}" style="width:36px; height:50px; object-fit:cover; border-radius:4px;" onerror="this.onerror=null; this.src='${generateBookSvgCover(book.title, book.category)}';">
          </td>
          <td>
            <strong>${book.title}</strong>
            <div class="text-muted" style="font-size:12px;">By ${book.author} &bull; ISBN: ${book.isbn || 'N/A'}</div>
          </td>
          <td><span class="badge badge-category">${book.category}</span></td>
          <td><strong>$${Number(book.price).toFixed(2)}</strong></td>
          <td>${book.quantity} copies</td>
          <td>${stockBadge}</td>
          <td>
            <button class="btn btn-sm btn-outline" onclick="openBookModal('${book.id}')"><i class="fa-solid fa-pen"></i></button>
            <button class="btn btn-sm btn-outline text-danger" onclick="confirmDeleteBook('${book.id}')"><i class="fa-solid fa-trash"></i></button>
          </td>
        </tr>
      `;
    }).join('');
  }
}

function openBookModal(bookId = null) {
  const modal = document.getElementById('bookModal');
  const title = document.getElementById('bookModalTitle');
  const form = document.getElementById('bookForm');

  form.reset();

  if (bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book) return;
    title.innerHTML = '<i class="fa-solid fa-pen-to-square"></i> Edit Book Details';
    document.getElementById('bookFormId').value = book.id;
    document.getElementById('bookTitleInput').value = book.title;
    document.getElementById('bookAuthorInput').value = book.author;
    document.getElementById('bookCategorySelect').value = book.category;
    document.getElementById('bookPriceInput').value = book.price;
    document.getElementById('bookQuantityInput').value = book.quantity;
    document.getElementById('bookIsbnInput').value = book.isbn || '';
    document.getElementById('bookCoverInput').value = book.cover || '';
    document.getElementById('bookCoverPreview').src = book.cover || generateBookSvgCover(book.title, book.category);
  } else {
    title.innerHTML = '<i class="fa-solid fa-book"></i> Add New Book to Catalog';
    document.getElementById('bookFormId').value = '';
    document.getElementById('bookCoverPreview').src = generateBookSvgCover('New Book', 'Education');
  }

  modal.classList.add('show');
}

function handleSaveBook(e) {
  e.preventDefault();

  const id = document.getElementById('bookFormId').value;
  const title = document.getElementById('bookTitleInput').value.trim();
  const author = document.getElementById('bookAuthorInput').value.trim();
  const category = document.getElementById('bookCategorySelect').value;
  const price = parseFloat(document.getElementById('bookPriceInput').value);
  const quantity = parseInt(document.getElementById('bookQuantityInput').value, 10);
  const isbn = document.getElementById('bookIsbnInput').value.trim();
  let cover = document.getElementById('bookCoverInput').value.trim();

  if (!title || !author || !category || isNaN(price) || price <= 0 || isNaN(quantity) || quantity < 0) {
    showToast('Please fill in all required fields with valid values.', 'danger');
    return;
  }

  if (!cover) {
    cover = generateBookSvgCover(title, category);
  }

  if (id) {
    // Update existing
    const idx = books.findIndex(b => b.id === id);
    if (idx !== -1) {
      books[idx] = {
        ...books[idx],
        title,
        author,
        category,
        price,
        quantity,
        isbn,
        cover
      };
      showToast(`Book "${title}" updated successfully!`, 'success');
    }
  } else {
    // Create new
    const newBook = {
      id: 'BK-' + Date.now().toString().slice(-5),
      title,
      author,
      category,
      price,
      quantity,
      isbn: isbn || '978-' + Math.floor(1000000000 + Math.random() * 9000000000),
      cover,
      soldCount: 0
    };
    books.unshift(newBook);
    showToast(`Book "${title}" added to catalog!`, 'success');
  }

  saveData(STORAGE_KEYS.BOOKS, books);
  closeModal('bookModal');
  renderAllViews();
}

function confirmDeleteBook(bookId) {
  const book = books.find(b => b.id === bookId);
  if (!book) return;

  openConfirmModal(
    `Delete Book "${book.title}"?`,
    `Are you sure you want to remove this book from the university catalog? This action cannot be reversed.`,
    () => {
      books = books.filter(b => b.id !== bookId);
      saveData(STORAGE_KEYS.BOOKS, books);
      // Remove from cart if present
      currentCart = currentCart.filter(item => item.id !== bookId);
      renderAllViews();
      showToast(`Book "${book.title}" deleted.`, 'warning');
    }
  );
}

// ================= 3. POINT OF SALE (POS) =================
let posSelectedCategory = 'All';

function initPOS() {
  document.getElementById('posSearchInput')?.addEventListener('input', renderPosCatalog);

  const pills = document.querySelectorAll('#posCategoryPills .pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      posSelectedCategory = pill.dataset.category;
      renderPosCatalog();
    });
  });

  // Customer Select & Quick Add
  populatePosCustomerSelect();
  document.getElementById('posQuickAddCustomerBtn')?.addEventListener('click', () => openCustomerModal());

  // Discount changes
  document.getElementById('posDiscountSelect')?.addEventListener('change', updateCartTotals);

  // Payment Method buttons
  const payBtns = document.querySelectorAll('.btn-pay-method');
  payBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      payBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentPaymentMethod = btn.dataset.method;

      const tenderBlock = document.getElementById('cashTenderBlock');
      if (tenderBlock) {
        tenderBlock.style.display = currentPaymentMethod === 'Cash' ? 'block' : 'none';
      }
      calculateCashChange();
    });
  });

  // Amount Paid (Cash change calculation)
  document.getElementById('posAmountPaid')?.addEventListener('input', calculateCashChange);

  // Clear Cart
  document.getElementById('clearCartBtn')?.addEventListener('click', () => {
    if (currentCart.length === 0) return;
    currentCart = [];
    renderPosCart();
    showToast('Cart cleared', 'info');
  });

  // Complete Sale
  document.getElementById('posCheckoutBtn')?.addEventListener('click', handleCompleteSale);
}

function populatePosCustomerSelect() {
  const select = document.getElementById('posCustomerSelect');
  if (!select) return;

  select.innerHTML = `
    <option value="walkin">Walk-in Customer (General)</option>
    ${customers.map(c => `<option value="${c.id}">${c.name} — ${c.phone}</option>`).join('')}
  `;
}

function renderPosCatalog() {
  const search = (document.getElementById('posSearchInput')?.value || '').toLowerCase().trim();
  const container = document.getElementById('posItemsContainer');
  if (!container) return;

  const filtered = books.filter(b => {
    const matchSearch = b.title.toLowerCase().includes(search) || b.author.toLowerCase().includes(search);
    const matchCat = (posSelectedCategory === 'All') || (b.category === posSelectedCategory);
    return matchSearch && matchCat;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align:center; padding: 40px; color:#64748b;">
        <i class="fa-solid fa-magnifying-glass" style="font-size:28px; margin-bottom:8px;"></i>
        <p>No matching books found in catalog.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(book => {
    const qty = Number(book.quantity);
    const isOutOfStock = qty <= 0;

    return `
      <div class="pos-item-card ${isOutOfStock ? 'disabled' : ''}" onclick="addToCart('${book.id}')">
        <img class="pos-item-cover" src="${book.cover}" alt="${book.title}" onerror="this.onerror=null; this.src='${generateBookSvgCover(book.title, book.category)}';">
        <div class="pos-item-title" title="${book.title}">${book.title}</div>
        <div class="pos-item-author">${book.author}</div>
        <div class="pos-item-footer">
          <span class="pos-item-price">$${Number(book.price).toFixed(2)}</span>
          <span class="pos-item-stock-tag ${qty <= 5 ? 'text-danger' : ''}">
            ${isOutOfStock ? 'Out of stock' : `${qty} left`}
          </span>
        </div>
      </div>
    `;
  }).join('');
}

function addToCart(bookId) {
  const book = books.find(b => b.id === bookId);
  if (!book || Number(book.quantity) <= 0) {
    showToast('This book is out of stock.', 'danger');
    return;
  }

  const existing = currentCart.find(item => item.id === bookId);
  if (existing) {
    if (existing.quantity + 1 > Number(book.quantity)) {
      showToast(`Cannot add more than available inventory (${book.quantity} copies).`, 'warning');
      return;
    }
    existing.quantity += 1;
  } else {
    currentCart.push({
      id: book.id,
      title: book.title,
      price: Number(book.price),
      quantity: 1,
      maxStock: Number(book.quantity)
    });
  }

  renderPosCart();
}

function changeCartQty(bookId, delta) {
  const item = currentCart.find(i => i.id === bookId);
  const book = books.find(b => b.id === bookId);
  if (!item || !book) return;

  const newQty = item.quantity + delta;
  if (newQty <= 0) {
    currentCart = currentCart.filter(i => i.id !== bookId);
  } else if (newQty > Number(book.quantity)) {
    showToast(`Only ${book.quantity} copies available in stock!`, 'warning');
    return;
  } else {
    item.quantity = newQty;
  }

  renderPosCart();
}

function removeFromCart(bookId) {
  currentCart = currentCart.filter(i => i.id !== bookId);
  renderPosCart();
}

function renderPosCart() {
  const container = document.getElementById('posCartItemsList');
  const checkoutBtn = document.getElementById('posCheckoutBtn');
  if (!container) return;

  if (currentCart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-message">
        <i class="fa-solid fa-cart-arrow-down"></i>
        <p>Register is empty</p>
        <small>Click any book on the left to add it</small>
      </div>
    `;
    if (checkoutBtn) checkoutBtn.disabled = true;
    updateCartTotals();
    return;
  }

  if (checkoutBtn) checkoutBtn.disabled = false;

  container.innerHTML = currentCart.map(item => `
    <div class="cart-item-row">
      <div class="cart-item-info">
        <div class="cart-item-title" title="${item.title}">${item.title}</div>
        <div class="cart-item-price-unit">$${item.price.toFixed(2)} each</div>
      </div>
      <div class="cart-qty-controls">
        <button class="btn-qty" onclick="changeCartQty('${item.id}', -1)">-</button>
        <span class="cart-qty-value">${item.quantity}</span>
        <button class="btn-qty" onclick="changeCartQty('${item.id}', 1)">+</button>
      </div>
      <div class="cart-item-subtotal">$${(item.price * item.quantity).toFixed(2)}</div>
      <button class="btn-cart-remove" onclick="removeFromCart('${item.id}')" title="Remove">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  `).join('');

  updateCartTotals();
}

function updateCartTotals() {
  const subtotal = currentCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountRate = parseFloat(document.getElementById('posDiscountSelect')?.value || 0);
  const discountAmount = subtotal * (discountRate / 100);
  const taxableAmount = Math.max(0, subtotal - discountAmount);
  const tax = taxableAmount * 0.05; // 5% academic sales tax
  const grandTotal = taxableAmount + tax;

  document.getElementById('posSubtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('posDiscountAmount').textContent = `-$${discountAmount.toFixed(2)}`;
  document.getElementById('posTaxAmount').textContent = `$${tax.toFixed(2)}`;
  document.getElementById('posGrandTotal').textContent = `$${grandTotal.toFixed(2)}`;

  calculateCashChange();
}

function calculateCashChange() {
  if (currentPaymentMethod !== 'Cash') return;

  const grandTotalText = document.getElementById('posGrandTotal').textContent.replace('$', '');
  const grandTotal = parseFloat(grandTotalText) || 0;
  const amountPaidInput = document.getElementById('posAmountPaid');
  const changeDueBox = document.getElementById('posChangeDue');

  const tendered = parseFloat(amountPaidInput?.value) || 0;
  const change = tendered - grandTotal;

  if (changeDueBox) {
    if (change >= 0) {
      changeDueBox.textContent = `$${change.toFixed(2)}`;
      changeDueBox.classList.remove('text-danger');
      changeDueBox.classList.add('text-success');
    } else {
      changeDueBox.textContent = `-$${Math.abs(change).toFixed(2)}`;
      changeDueBox.classList.remove('text-success');
      changeDueBox.classList.add('text-danger');
    }
  }
}

function handleCompleteSale() {
  if (currentCart.length === 0) {
    showToast('Cannot complete sale: Cart is empty!', 'danger');
    return;
  }

  const grandTotalText = document.getElementById('posGrandTotal').textContent.replace('$', '');
  const grandTotal = parseFloat(grandTotalText) || 0;

  // Tendered check if Cash
  let amountPaid = grandTotal;
  if (currentPaymentMethod === 'Cash') {
    const tenderedVal = parseFloat(document.getElementById('posAmountPaid').value);
    if (isNaN(tenderedVal) || tenderedVal < grandTotal) {
      showToast('Cash tendered is less than the Grand Total amount!', 'danger');
      return;
    }
    amountPaid = tenderedVal;
  }

  // Customer resolution
  const custSelect = document.getElementById('posCustomerSelect');
  const customerId = custSelect.value;
  let customerName = 'Walk-in Customer';
  if (customerId !== 'walkin') {
    const cust = customers.find(c => c.id === customerId);
    if (cust) {
      customerName = cust.name;
      cust.ordersCount = (cust.ordersCount || 0) + 1;
      cust.totalSpent = (cust.totalSpent || 0) + grandTotal;
      saveData(STORAGE_KEYS.CUSTOMERS, customers);
    }
  }

  // Deduct Inventory Stock & Increment Sold Count
  currentCart.forEach(cartItem => {
    const book = books.find(b => b.id === cartItem.id);
    if (book) {
      book.quantity = Math.max(0, Number(book.quantity) - cartItem.quantity);
      book.soldCount = (book.soldCount || 0) + cartItem.quantity;
    }
  });
  saveData(STORAGE_KEYS.BOOKS, books);

  // Build Transaction Record
  const subtotal = currentCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountRate = parseFloat(document.getElementById('posDiscountSelect')?.value || 0);
  const discountAmount = subtotal * (discountRate / 100);
  const tax = (subtotal - discountAmount) * 0.05;
  const changeDue = Math.max(0, amountPaid - grandTotal);

  const saleRecord = {
    receiptId: 'RCP-' + Date.now().toString().slice(-6),
    date: new Date().toISOString().replace('T', ' ').slice(0, 16),
    customerId: customerId,
    customerName: customerName,
    items: currentCart.map(i => ({
      id: i.id,
      title: i.title,
      price: i.price,
      quantity: i.quantity,
      subtotal: i.price * i.quantity
    })),
    subtotal,
    discountRate,
    discountAmount,
    tax,
    grandTotal,
    paymentMethod: currentPaymentMethod,
    tendered: amountPaid,
    change: changeDue
  };

  sales.unshift(saleRecord);
  saveData(STORAGE_KEYS.SALES, sales);

  // Clear Cart & reset cash tender input
  currentCart = [];
  if (document.getElementById('posAmountPaid')) {
    document.getElementById('posAmountPaid').value = '';
  }
  renderPosCart();
  renderAllViews();

  showToast(`Sale #${saleRecord.receiptId} finalized successfully!`, 'success');

  // Automatically pop receipt modal
  openReceiptModal(saleRecord);
}

// ================= 4. SALES HISTORY & RECEIPTS =================
function initSalesHistory() {
  document.getElementById('salesSearchInput')?.addEventListener('input', renderSalesHistory);
  document.getElementById('salesFilterPayment')?.addEventListener('change', renderSalesHistory);
  document.getElementById('exportSalesCsvBtn')?.addEventListener('click', exportSalesToCsv);
  document.getElementById('printReceiptBtn')?.addEventListener('click', () => window.print());
}

function renderSalesHistory() {
  const search = (document.getElementById('salesSearchInput')?.value || '').toLowerCase().trim();
  const payFilter = document.getElementById('salesFilterPayment')?.value || 'All';
  const tbody = document.getElementById('salesHistoryTableBody');
  const emptyState = document.getElementById('salesEmptyState');
  if (!tbody) return;

  const filtered = sales.filter(s => {
    const matchSearch = s.receiptId.toLowerCase().includes(search) ||
                        s.customerName.toLowerCase().includes(search) ||
                        s.paymentMethod.toLowerCase().includes(search);
    const matchPay = (payFilter === 'All') || (s.paymentMethod === payFilter);
    return matchSearch && matchPay;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = '';
    emptyState.style.display = 'block';
    return;
  }

  emptyState.style.display = 'none';
  tbody.innerHTML = filtered.map(sale => `
    <tr>
      <td><strong>${sale.receiptId}</strong></td>
      <td><small>${sale.date}</small></td>
      <td>${sale.customerName}</td>
      <td>${sale.items.reduce((sum, i) => sum + i.quantity, 0)} items (${sale.items.length} titles)</td>
      <td>$${Number(sale.subtotal).toFixed(2)}</td>
      <td>-$${Number(sale.discountAmount || 0).toFixed(2)}</td>
      <td><strong class="text-primary">$${Number(sale.grandTotal).toFixed(2)}</strong></td>
      <td><span class="badge badge-category">${sale.paymentMethod}</span></td>
      <td>
        <button class="btn btn-sm btn-outline" onclick="viewReceiptById('${sale.receiptId}')">
          <i class="fa-solid fa-receipt"></i> View
        </button>
      </td>
    </tr>
  `).join('');
}

function viewReceiptById(receiptId) {
  const sale = sales.find(s => s.receiptId === receiptId);
  if (!sale) {
    showToast('Receipt record not found', 'danger');
    return;
  }
  openReceiptModal(sale);
}

function openReceiptModal(sale) {
  document.getElementById('recReceiptId').textContent = sale.receiptId;
  document.getElementById('recDate').textContent = sale.date;
  document.getElementById('recCustomer').textContent = sale.customerName;
  document.getElementById('recSubtotal').textContent = `$${Number(sale.subtotal).toFixed(2)}`;
  document.getElementById('recTax').textContent = `$${Number(sale.tax).toFixed(2)}`;
  document.getElementById('recGrandTotal').textContent = `$${Number(sale.grandTotal).toFixed(2)}`;
  document.getElementById('recPaymentMethod').textContent = sale.paymentMethod;
  document.getElementById('recBarcodeText').textContent = `*${sale.receiptId}*`;

  // Discount row
  const discRow = document.getElementById('recDiscountRow');
  if (sale.discountAmount && sale.discountAmount > 0) {
    discRow.style.display = 'flex';
    document.getElementById('recDiscountRate').textContent = `${sale.discountRate}%`;
    document.getElementById('recDiscountAmount').textContent = `-$${Number(sale.discountAmount).toFixed(2)}`;
  } else {
    discRow.style.display = 'none';
  }

  // Cash change row
  const cashRow = document.getElementById('recCashRow');
  if (sale.paymentMethod === 'Cash') {
    cashRow.style.display = 'flex';
    document.getElementById('recTendered').textContent = `$${Number(sale.tendered).toFixed(2)}`;
    document.getElementById('recChange').textContent = `$${Number(sale.change || 0).toFixed(2)}`;
  } else {
    cashRow.style.display = 'none';
  }

  // Table items
  const tbody = document.getElementById('recItemsBody');
  tbody.innerHTML = sale.items.map(item => `
    <tr>
      <td class="text-left">${item.title}</td>
      <td class="text-center">${item.quantity}</td>
      <td class="text-right">$${Number(item.price).toFixed(2)}</td>
      <td class="text-right">$${(Number(item.price) * item.quantity).toFixed(2)}</td>
    </tr>
  `).join('');

  document.getElementById('receiptModal').classList.add('show');
}

function exportSalesToCsv() {
  if (sales.length === 0) {
    showToast('No sales data to export', 'warning');
    return;
  }

  let csv = 'ReceiptID,Date,Customer,TotalItems,Subtotal,Discount,Tax,GrandTotal,PaymentMethod\n';
  sales.forEach(s => {
    const totalItems = s.items.reduce((acc, i) => acc + i.quantity, 0);
    csv += `"${s.receiptId}","${s.date}","${s.customerName}",${totalItems},${s.subtotal},${s.discountAmount || 0},${s.tax},${s.grandTotal},"${s.paymentMethod}"\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `Lumina_Books_Sales_MIS_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast('Sales CSV exported successfully!', 'success');
}

// ================= 5. INVENTORY MANAGEMENT =================
function initInventory() {
  document.getElementById('invSearchInput')?.addEventListener('input', renderInventory);
  document.getElementById('invStatusFilter')?.addEventListener('change', renderInventory);
  document.getElementById('restockForm')?.addEventListener('submit', handleSaveRestock);

  // Restock quick buttons
  document.querySelectorAll('.btn-quick-add').forEach(btn => {
    btn.addEventListener('click', () => {
      const addVal = parseInt(btn.dataset.add, 10);
      const input = document.getElementById('restockQuantityInput');
      input.value = (parseInt(input.value || 0, 10)) + addVal;
    });
  });
}

function renderInventory() {
  // Calculations
  const inStock = books.filter(b => Number(b.quantity) > 5).length;
  const lowStock = books.filter(b => Number(b.quantity) > 0 && Number(b.quantity) <= 5).length;
  const outOfStock = books.filter(b => Number(b.quantity) === 0).length;
  const assetValuation = books.reduce((sum, b) => sum + (Number(b.price) * Number(b.quantity)), 0);

  document.getElementById('invTotalInStock').textContent = inStock;
  document.getElementById('invTotalLowStock').textContent = lowStock;
  document.getElementById('invTotalOutOfStock').textContent = outOfStock;
  document.getElementById('invTotalValuation').textContent = `$${assetValuation.toFixed(2)}`;

  const search = (document.getElementById('invSearchInput')?.value || '').toLowerCase().trim();
  const filter = document.getElementById('invStatusFilter')?.value || 'All';
  const tbody = document.getElementById('inventoryTableBody');
  if (!tbody) return;

  const filtered = books.filter(b => {
    const matchSearch = b.title.toLowerCase().includes(search) || b.author.toLowerCase().includes(search);
    const qty = Number(b.quantity);
    let matchFilter = true;
    if (filter === 'LowAndOut') matchFilter = qty <= 5;
    else if (filter === 'LowStock') matchFilter = qty > 0 && qty <= 5;
    else if (filter === 'OutOfStock') matchFilter = qty === 0;
    else if (filter === 'InStock') matchFilter = qty > 5;

    return matchSearch && matchFilter;
  });

  tbody.innerHTML = filtered.map(book => {
    const qty = Number(book.quantity);
    let statusBadge = `<span class="badge badge-in-stock"><i class="fa-solid fa-circle-check">