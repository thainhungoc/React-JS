interface Feedback {
    id: number;
    score: number;
    content: string;
  }
  
  class FeedbackMenu {
    private feedbackList: Feedback[];
  
    constructor(feedbackList: Feedback[]) {
      this.feedbackList = feedbackList;
    }
  
    renderFeedback(): void {
      const feedbackListDiv = document.getElementById('feedback-list')!;
      feedbackListDiv.innerHTML = '';
  
      this.feedbackList.forEach(feedback => {
        const feedbackItem = document.createElement('div');
        feedbackItem.className = 'feedback-item';
        // feedbackItem.innerHTML = `
        //   <p>${feedback.score}: ${feedback.content}</p>
        //   <button class="btn btn-primary btn-sm" onclick="editFeedback(${feedback.id})">Edit</button>
        //   <button class="btn btn-danger btn-sm" onclick="deleteFeedback(${feedback.id})">Delete</button>
        // `;
        feedbackItem.innerHTML = `<p>${feedback.score} ${feedback.content}</p>
        <i class="bi bi-pencil-square fbitem" onclick="editFeedback(${feedback.id})"></i>
        <i class="bi bi-x fbitem" onclick="deleteFeedback(${feedback.id})"></i>` ;

        feedbackListDiv.appendChild(feedbackItem);
      });
    }
  
    createFeedback(newFeedback: Feedback): void {
      this.feedbackList.push(newFeedback);
      this.saveFeedbackToLocalStorage();
    }
  
    updateFeedback(updatedFeedback: Feedback): void {
      const index = this.feedbackList.findIndex(feedback => feedback.id === updatedFeedback.id);
      if (index !== -1) {
        this.feedbackList[index] = updatedFeedback;
        this.saveFeedbackToLocalStorage();
      }
    }
  
    deleteFeedback(id: number): void {
      this.feedbackList = this.feedbackList.filter(feedback => feedback.id !== id);
      this.saveFeedbackToLocalStorage();
    }
  
    private saveFeedbackToLocalStorage(): void {
      const feedbackString = JSON.stringify(this.feedbackList);
      localStorage.setItem('feedback', feedbackString);
    }
  
    static loadFeedbackFromLocalStorage(): Feedback[] {
      const feedbackString = localStorage.getItem('feedback');
      if (feedbackString) {
        return JSON.parse(feedbackString) as Feedback[];
      } else {
        return [];
      }
    }
  }
  
  let selectedScore: number | null = null;
  let feedbackToEdit: Feedback | null = null;
  
  document.addEventListener('DOMContentLoaded', () => {
    const feedbackList = FeedbackMenu.loadFeedbackFromLocalStorage();
    const feedbackMenu = new FeedbackMenu(feedbackList);
    feedbackMenu.renderFeedback();
  
    const scoreItems = document.querySelectorAll('.score-item');
    scoreItems.forEach(item => {
      item.addEventListener('click', () => {
        selectRating(parseInt(item.getAttribute('data-score')!));
      });
    });
  
    document.getElementById('send-feedback')!.addEventListener('click', handleSendFeedback);
  });
  
  function selectRating(score: number) {
    selectedScore = score;
    const scoreItems = document.querySelectorAll('.score-item');
    scoreItems.forEach(item => {
      item.classList.remove('selected');
    });
    const selectedItem = document.querySelector(`.score-item[data-score="${score}"]`);
    selectedItem?.classList.add('selected');
  }
  
  function handleSendFeedback(): void {
    const content = document.getElementById('content') as HTMLTextAreaElement;
  
    if (!selectedScore || !content.value) {
      alert('Vui lòng chon số điểm cần feedback');
      return;
    }
  
    const feedbackList = FeedbackMenu.loadFeedbackFromLocalStorage();
    const feedbackMenu = new FeedbackMenu(feedbackList);
  
    if (feedbackToEdit) {
      feedbackToEdit.score = selectedScore;
      feedbackToEdit.content = content.value;
      feedbackMenu.updateFeedback(feedbackToEdit);
      feedbackToEdit = null;
      document.getElementById('send-feedback')!.textContent = 'Gửi';
    } else {
      const newFeedback: Feedback = {
        id: generateNewId(feedbackMenu),
        score: selectedScore,
        content: content.value,
      };
  
      feedbackMenu.createFeedback(newFeedback);
    }
  
    feedbackMenu.renderFeedback();
    resetForm();
  }
  
  function generateNewId(feedbackMenu: FeedbackMenu): number {
    const feedbackList = feedbackMenu['feedbackList'];
    const maxId = feedbackList.reduce((max, feedback) => (feedback.id > max ? feedback.id : max), 0);
    return maxId + 1;
  }
  
  function resetForm() {
    (document.getElementById('content') as HTMLTextAreaElement).value = '';
    selectedScore = null;
    const scoreItems = document.querySelectorAll('.score-item');
    scoreItems.forEach(item => {
      item.classList.remove('selected');
    });
  }
  
  function deleteFeedback(id: number) {
    if (confirm('Bạn có muốn xóa feedback?')) {
      const feedbackList = FeedbackMenu.loadFeedbackFromLocalStorage();
      const feedbackMenu = new FeedbackMenu(feedbackList);
      feedbackMenu.deleteFeedback(id);
      feedbackMenu.renderFeedback();
    }
  }
  
  function editFeedback(id: number) {
    const feedbackList = FeedbackMenu.loadFeedbackFromLocalStorage();
    const feedbackMenu = new FeedbackMenu(feedbackList);
    feedbackToEdit = feedbackMenu['feedbackList'].find(feedback => feedback.id === id) || null;
  
    if (feedbackToEdit) {
      (document.getElementById('content') as HTMLTextAreaElement).value = feedbackToEdit.content;
      selectRating(feedbackToEdit.score);
      document.getElementById('send-feedback')!.textContent = 'Update';
    }
  }
  