import BaseApi from './baseApi';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {
  URL_CURRNT_BALANCE,
  URL_DELETE_POST,
  URL_FILTER_CATEGORY,
  URL_FILTER_POSTS,
  URL_FINANCIAL,
  URL_GET_CATEGORIES,
} from '../constants/indexConstants';

class MyApi extends BaseApi {
  // getting the current balance
  async getCurrentBalance() {
    // get google token
    const token = await GoogleSignin.getTokens();
    let url = `A2?access_token=${token.accessToken}`;
    return this.request({
      method: 'get',
      url: URL_CURRNT_BALANCE + url,
    });
  }
  // get all added categories
  async getCategories() {
    const token = await GoogleSignin.getTokens();
    let url = `A2:A1000?access_token=${token.accessToken}`;
    return this.request({ method: 'get', url: URL_GET_CATEGORIES + url });
  }
  // getting filtered tasks for the selected month
  async getFilteredPosts(mothYear) {
    const url = `exec?date=${mothYear}`;
    return this.request({
      method: 'get',
      url: URL_FILTER_POSTS + url,
    });
  }
  // getting filtered tasks by the category selected in them
  async getFilterCategory(category) {
    const url = `exec?category=${category}`;
    return this.request({
      method: 'get',
      url: URL_FILTER_CATEGORY + url,
    });
  }

  async RequestAllAddedCategories() {
    const token = await GoogleSignin.getTokens();
    let url = `A2:A1000?access_token=${token.accessToken}`;
    return this.request({
      method: 'get',
      url: URL_GET_CATEGORIES + url,
    });
  }
  // Edit elements of a selected task
  async changeAmountPost(
    id,
    expenditure,
    inputNameValue,
    selectItemUse,
    inputPriceValue,
    dateAdded,
  ) {
    const token = await GoogleSignin.getTokens();
    let url = `A${id}:E${id}?access_token=${token.accessToken}&includeValuesInResponse=true&valueInputOption=RAW`;
    return this.request({
      method: 'put',
      url: URL_FINANCIAL + url,
      data: {
        values: [
          [
            inputNameValue,
            inputPriceValue,
            selectItemUse,
            expenditure,
            dateAdded,
          ],
        ],
      },
    });
  }
  // changing the current balance when adding an expense
  async updateCurrentBalance(number) {
    const token = await GoogleSignin.getTokens();
    let url = `A2?access_token=${token.accessToken}&includeValuesInResponse=true&valueInputOption=RAW`;
    return this.request({
      method: 'put',
      url: URL_CURRNT_BALANCE + url,
      data: {
        values: [[number]],
      },
    });
  }
  // adding a category
  async addList(typeCategory) {
    const token = await GoogleSignin.getTokens();
    let url = `A2:append?access_token=${token.accessToken}&valueInputOption=RAW`;
    return this.request({
      method: 'post',
      url: URL_GET_CATEGORIES + url,
      data: {
        values: [[typeCategory]],
      },
    });
  }
  // adding a new expense
  async postTasksList(
    expenses,
    expensesAmount,
    selectItemUse,
    expenditure,
    dateAdded,
    TASK_ID,
  ) {
    const token = await GoogleSignin.getTokens();
    let url = `A2:A1000:append?access_token=${token.accessToken}&valueInputOption=RAW`;
    return this.request({
      method: 'post',
      url: URL_FINANCIAL + url,
      data: {
        values: [
          [
            expenses,
            expensesAmount,
            ...selectItemUse,
            expenditure,
            dateAdded,
            TASK_ID,
          ],
        ],
      },
    });
  }
  // deleting the selected category
  async deleteCategories(id) {
    const token = await GoogleSignin.getTokens();
    let url = `A${id}:clear?access_token=${token.accessToken}`;
    return this.request({
      method: 'post',
      url: URL_GET_CATEGORIES + url,
    });
  }
  // deleting the selected expense from the list
  async deletePostTasks(id) {
    let url = `exec?id=${id}`;
    return this.request({
      method: 'get',
      url: URL_DELETE_POST + url,
    });
  }
}

const MyAPI = new MyApi();
export default MyAPI;
