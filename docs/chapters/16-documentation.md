---
title: 文件記錄
description: 指引戰術醫療環境下的文件記錄規範，包含 MIST 報告格式、9-Line 救護後送呼叫以及美軍 DD1380 戰術傷票欄位。
order: 16
category: 檢傷與文件
status: published
tags: [MIST格式, 9-Line, DD1380傷票, 傷情記錄, 戰術通訊]
---

# 文件記錄

### 16.1 文件記錄

**大原則**
- 沒有傷票就寫在傷患身上
- 允許時用手機錄音，事後補填文件（現場速度優先）
- DD1380 同時是文件紀錄也是操作指引

#### MIST 格式

<table>
  <colgroup>
    <col style="width: 50%" />
    <col style="width: 50%" />
  </colgroup>
  <thead>
    <tr><th>字母</th><th>內容</th></tr>
  </thead>
  <tbody>
    <tr><td>M</td><td>Mechanism（受傷機轉）</td></tr>
    <tr><td>I</td><td>Injury（傷情）</td></tr>
    <tr><td>S</td><td>Signs（生命徵象）</td></tr>
    <tr><td>T</td><td>Treatment（已給予的處置）</td></tr>
  </tbody>
</table>

#### 9-Line

- 呼叫載具支援後撤的通用格式
- 台灣對接單位不一定熟悉此格式，優先使用 MIST
- 全程注意無線電通訊保密（COMSEC），能不直接講的資訊就不講
- Line 1–5 在載具出發前必須回報；Line 6–9 可在載具出發後途中補報

<table>
  <colgroup>
    <col style="width: 20%" />
    <col style="width: 30%" />
    <col style="width: 50%" />
  </colgroup>
  <thead>
    <tr><th>Line</th><th>內容</th><th>代碼與說明</th></tr>
  </thead>
  <tbody>
    <tr><td>Line 1</td><td>地點位置（座標）</td><td>不是當下位置，而是<strong>傷患後送交接的位置</strong>；注意無線電通訊保密</td></tr>
    <tr><td>Line 2</td><td>無線電頻率、呼號</td><td>考量通訊保密，可以的話不要直接講頻率</td></tr>
    <tr><td>Line 3</td><td>傷患人數與優先序</td><td>A：Urgent Casualties<br>B：Urgent Surgical Casualties<br>C：Priority Casualties<br>D：Routine Casualties<br>E：Convenience Casualties<br>時限：Urgent／Urgent Surgical（需外科手術）1 小時內、Priority 4 小時內、Routine 24 小時內、Convenience 非醫療必要，僅為方便後送<br>呼叫方式：代碼＋人數，例如「Alfa Two, Break, Charlie Four, Over」</td></tr>
    <tr><td>Line 4</td><td>特殊裝備</td><td>A：None<br>B：Hoist<br>C：Extraction Equipment<br>D：Ventilator</td></tr>
    <tr><td>Line 5</td><td>傷患狀態</td><td>L：Litter Patients（擔架傷患人數）<br>A：Ambulatory Patients（可自行行走傷患人數）<br>兩種都有時，中間用 Break 分開</td></tr>
    <tr><td>Line 6</td><td>後送地點安全狀況</td><td>N：沒有敵情<br>P：可能有敵人<br>E：有敵人，接近時需要注意<br>X：有敵人，需要武裝護衛</td></tr>
    <tr><td>Line 7</td><td>後送點識別</td><td>A：布板<br>B：信號彈（照明彈、信號槍等煙火類）<br>C：煙霧信號（發煙罐、煙霧彈）<br>D：無<br>E：其他<br>顏色等細節不在此處說，與後送隊伍取得聯繫後再律定：由載具先報出看到的顏色，地面再確認（防止敵人冒用；現場也可能有多組同時後送，信號顏色可能相同）</td></tr>
    <tr><td>Line 8</td><td>傷患身份</td><td>A：本國軍人<br>B：本國平民<br>C：外國軍人<br>D：外國平民<br>E：戰俘</td></tr>
    <tr><td>Line 9</td><td>NBC 環境</td><td>N：核子（Nuclear）<br>B：生物武器（Biological）<br>C：化學武器（Chemical）<br>地貌、地形描述屬平時版內容，部分單位戰時也會一併回報</td></tr>
  </tbody>
</table>

> 上表為戰時版。平時版 Line 6 改報傷病數量與類型（傷病類型、有無嚴重出血、已知血型），Line 9 改報後送點地形描述。

#### DD1380 傷票

> **[draft]** 完整欄位說明待補充

**戰鬥代碼（Battle Roster #）撰寫方式**

<table>
  <colgroup>
    <col style="width: 50%" />
    <col style="width: 50%" />
  </colgroup>
  <thead>
    <tr><th>寫法</th><th>範例（Lin, Da Ming / C123456789）</th></tr>
  </thead>
  <tbody>
    <tr><td>英文姓名縮寫兩碼 ＋ 身分證字號後四碼</td><td>LD6789</td></tr>
    <tr><td>直接寫身分證字號</td><td>C123456789</td></tr>
  </tbody>
</table>

![DD1380 正面](/images/dd1380-form-p1.png)

![DD1380 背面](/images/dd1380-form-p2.png)
